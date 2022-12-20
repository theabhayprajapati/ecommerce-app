import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:fresh_store_ui/components/product_card.dart';
import 'package:fresh_store_ui/model/popular.dart';
import 'package:fresh_store_ui/screens/detail/detail_screen.dart';
import 'package:fresh_store_ui/screens/home/hearder.dart';
import 'package:fresh_store_ui/screens/home/most_popular.dart';
import 'package:fresh_store_ui/screens/home/search_field.dart';
import 'package:fresh_store_ui/screens/home/special_offer.dart';
import 'package:fresh_store_ui/screens/mostpopular/most_popular_screen.dart';
import 'package:fresh_store_ui/screens/special_offers/special_offers_screen.dart';
import 'package:http/http.dart' as http;
/* https://www.tluxe.com/products.json fetch this url */

List<dynamic> products = [];

class HomeScreen extends StatefulWidget {
  final String title;
  static String route() => '/home';
  const HomeScreen({super.key, required this.title});
  @override
  State<StatefulWidget> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final url = 'https://www.tluxe.com/products.json';

  String query = '''
  {
    products(first: 250) {
      edges {
        node {
            id
            title
            handle
            featuredImage{
                url
            }
            vendor
            variants(first: 250) {
                edges {
                    node { 
                        price{
                            amount
                        }
                    }
                }
            }
        }
      }
    }
  }
''';

  void apiCall() async {
    final response = await http.post(
      Uri.parse('https://wethekootest.myshopify.com/api/2022-10/graphql.json'),
      headers: {
        'Content-Type': 'application/graphql',
        'X-Shopify-Storefront-Access-Token':
            dotenv.env['SHOPIFY_STOREFRONT_ACCESS_TOKEN'].toString()
      },
      body: query,
    );
    if (response.statusCode == 200) {
      setState(() {
        // products = response.body;
        // pasrse to json
        var parsedRespose = jsonDecode(response.body);
        print(parsedRespose);
        products = parsedRespose['data']['products']['edges'];
      });
    }
  }

  @override
  void initState() {
    apiCall();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    const padding = EdgeInsets.fromLTRB(24, 24, 24, 0);
    return Scaffold(
      body: CustomScrollView(
        slivers: <Widget>[
          const SliverPadding(
            padding: EdgeInsets.only(top: 24),
            sliver: SliverAppBar(
              pinned: true,
              flexibleSpace: HomeAppBar(),
            ),
          ),
          SliverPadding(
            padding: padding,
            sliver: SliverList(
              delegate: SliverChildBuilderDelegate(
                ((context, index) => _buildBody(context)),
                childCount: 1,
              ),
            ),
          ),
          SliverPadding(
            padding: padding,
            sliver: _buildPopulars(),
          ),
          const SliverAppBar(flexibleSpace: SizedBox(height: 24))
        ],
      ),
    );
  }

  Widget _buildBody(BuildContext context) {
    return Column(
      children: [
        const SearchField(),
        const SizedBox(height: 24),
        SpecialOffers(onTapSeeAll: () => _onTapSpecialOffersSeeAll(context)),
        const SizedBox(height: 24),
        MostPopularTitle(onTapseeAll: () => _onTapMostPopularSeeAll(context)),
        const SizedBox(height: 24),
        const MostPupularCategory(),
      ],
    );
  }

  Widget _buildPopulars() {
    return SliverGrid(
      gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 185,
        mainAxisSpacing: 24,
        crossAxisSpacing: 16,
        mainAxisExtent: 285,
      ),
      delegate: SliverChildBuilderDelegate(_buildPopularItem, childCount: 30),
    );
  }

  Widget _buildPopularItem(BuildContext context, int index) {
    print(products[index]['node']['title']);
    Product prod = Product(
      id: products[index]['node']['id'],
      title: products[index]['node']['title'],
      price: double.parse(products[index]['node']['variants']['edges'][0]
          ['node']['price']['amount']),
      icon: products[index]['node']['featuredImage']['url'],
    );
    return ProductCard(
        data: prod,
        ontap: (data) => Navigator.pushNamed(context, ShopDetailScreen.route(),
            arguments: data));
  }

  void _onTapMostPopularSeeAll(BuildContext context) {
    Navigator.pushNamed(context, MostPopularScreen.route());
  }

  void _onTapSpecialOffersSeeAll(BuildContext context) {
    Navigator.pushNamed(context, SpecialOfferScreen.route());
  }
}
