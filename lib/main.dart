import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:fresh_store_ui/routes.dart';
import 'package:fresh_store_ui/screens/tabbar/tabbar.dart';
import 'package:fresh_store_ui/theme.dart';
import 'package:graphql_flutter/graphql_flutter.dart ';

Future main() async {
  await dotenv.load(fileName: ".env");
  WidgetsFlutterBinding.ensureInitialized();
  await initHiveForFlutter();
  runApp(const FreshBuyerApp());
}

class FreshBuyerApp extends StatelessWidget {
  const FreshBuyerApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Fresh-Buyer',
      theme: appTheme(),
      routes: routes,
      home: const FRTabbarScreen(),
    );
  }
}
