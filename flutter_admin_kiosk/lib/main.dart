import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

const String adminBaseUrl = 'https://your-render-domain.onrender.com/admin';
const String embeddedUsername = 'admin';
const String embeddedPassword = 'admin123';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const BrandSlotsAdminApp());
}

class BrandSlotsAdminApp extends StatelessWidget {
  const BrandSlotsAdminApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Brand Slots Admin',
      theme: ThemeData.dark(useMaterial3: true),
      home: const AdminWebViewScreen(),
    );
  }
}

class AdminWebViewScreen extends StatefulWidget {
  const AdminWebViewScreen({super.key});

  @override
  State<AdminWebViewScreen> createState() => _AdminWebViewScreenState();
}

class _AdminWebViewScreenState extends State<AdminWebViewScreen> {
  late final WebViewController _controller;

  @override
  void initState() {
    super.initState();

    final uri = Uri.parse(adminBaseUrl).replace(queryParameters: {
      'autoplay': '1',
      'username': embeddedUsername,
      'password': embeddedPassword,
    });

    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0xFF050505))
      ..loadRequest(uri);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: WebViewWidget(controller: _controller),
      ),
    );
  }
}
