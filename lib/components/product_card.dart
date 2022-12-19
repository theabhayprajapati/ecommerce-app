import 'package:flutter/material.dart';
import 'package:fresh_store_ui/model/popular.dart';

typedef ProductCardOnTaped = void Function(Product data);

class ProductCard extends StatelessWidget {
  const ProductCard({super.key, required this.data, this.ontap});

  final Product data;
  final ProductCardOnTaped? ontap;

  @override
  Widget build(BuildContext context) {
<<<<<<< HEAD
    // final data = datas[index % datas.length];
=======
>>>>>>> trunk
    const borderRadius = BorderRadius.all(Radius.circular(20));
    return InkWell(
      borderRadius: borderRadius,
      onTap: () => ontap?.call(data),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            decoration: const BoxDecoration(
              borderRadius: borderRadius,
<<<<<<< HEAD
              color: Color(0xFFeeeeee),
            ),
            child: Stack(
              children: [
                Image.asset(data.icon, width: 182, height: 182),
                Positioned(
                  top: 16,
                  right: 16,
                  child: Image.asset('assets/icons/not_collected@2x.png', width: 28, height: 28),
=======
              color: Color.fromARGB(255, 97, 85, 85),
            ),
            child: Stack(
              children: [
                /* border radius */
                ClipRRect(
                  borderRadius: borderRadius,
                  child: Image.network(
                    data.icon,
                    width: 160,
                    height: 160,
                    fit: BoxFit.cover,
                    /* center */
                    alignment: Alignment.center,
                    
                  ),
                ),
                Positioned(
                  top: 16,
                  right: 16,
                  child: Image.asset('assets/icons/not_collected@2x.png',
                      width: 28, height: 28),
>>>>>>> trunk
                )
              ],
            ),
          ),
          const SizedBox(height: 12),
          FittedBox(
            child: Text(
<<<<<<< HEAD
              data.title,
=======
              data.title.toString().split(' ').first,
>>>>>>> trunk
              style: const TextStyle(
                color: Color(0xFF212121),
                fontWeight: FontWeight.bold,
                fontSize: 18,
              ),
            ),
          ),
          const SizedBox(height: 10),
          _buildSoldPoint(4.5, 6937),
          const SizedBox(height: 10),
          Text(
            '\$${data.price.toStringAsFixed(2)}',
<<<<<<< HEAD
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF212121)),
=======
            style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Color(0xFF212121)),
>>>>>>> trunk
          )
        ],
      ),
    );
  }

  Widget _buildSoldPoint(double star, int sold) {
    return Row(
      children: [
        Image.asset('assets/icons/start@2x.png', width: 20, height: 20),
        const SizedBox(width: 8),
        Text(
          '$star',
          style: const TextStyle(
            color: Color(0xFF616161),
            fontSize: 14,
            fontWeight: FontWeight.w500,
          ),
        ),
        const SizedBox(width: 8),
        const Text(
          '|',
<<<<<<< HEAD
          style: TextStyle(fontWeight: FontWeight.w500, color: Color(0xFF616161), fontSize: 14),
=======
          style: TextStyle(
              fontWeight: FontWeight.w500,
              color: Color(0xFF616161),
              fontSize: 14),
>>>>>>> trunk
        ),
        const SizedBox(width: 8),
        Container(
          decoration: BoxDecoration(
            borderRadius: const BorderRadius.all(Radius.circular(6)),
            color: const Color(0xFF101010).withOpacity(0.08),
          ),
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
          child: Text(
            '$sold sold',
            style: const TextStyle(
              color: Color(0xFF35383F),
              fontWeight: FontWeight.w500,
              fontSize: 10,
            ),
          ),
        ),
      ],
    );
  }
}
