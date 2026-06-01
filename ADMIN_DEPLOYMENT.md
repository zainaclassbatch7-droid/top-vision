# Brand Slots Admin Deployment

## What is included

- A hosted admin route at `/admin`
- A Render config in `render.yaml`
- A desktop wrapper in `desktop-admin/`
- A Flutter wrapper in `flutter_admin_kiosk/`

## Render hosting

1. Push this project to GitHub.
2. In Render, create a new `Static Site`.
3. Point it to this repository.
4. Render will detect `render.yaml`.
5. After deploy, your admin URL will be:

```text
https://your-render-domain.onrender.com/admin?autoplay=1&username=admin&password=admin123
```

## Desktop app

1. Open `desktop-admin/main.js`
2. Replace `https://your-render-domain.onrender.com` with your real Render URL.
3. Inside `desktop-admin/`, run:

```bash
npm install
npm start
```

## Flutter APK

1. Open `flutter_admin_kiosk/lib/main.dart`
2. Replace `https://your-render-domain.onrender.com/admin` with your real Render URL.
3. Build the APK from the `flutter_admin_kiosk/` folder:

```bash
flutter pub get
flutter build apk
```

## Important security note

This setup embeds the username and password inside client apps because that is what you asked for. That is not secure for production because APKs and desktop apps can be unpacked. The safer replacement is a device-specific token or kiosk URL that expires or can be revoked.
