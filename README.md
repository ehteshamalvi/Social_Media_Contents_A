# Creator Workspace

Mobile app for Lumina Creator Studio — upload an image or reel, pick social platforms, and review generated posts for LinkedIn, Instagram, Reddit, and X.

## Release APK (ready)

Signed release APK:

```
mobile/apk/CreatorWorkspace-release.apk
```

Also available at:

```
mobile/android/app/build/outputs/apk/release/app-release.apk
```

Install on a device:

```bash
adb install mobile/apk/CreatorWorkspace-release.apk
```

## Open in Android Studio

1. Open Android Studio
2. **File → Open** → select this folder:

```
D:\Projects\Social_Media_Contents_AI\mobile\android
```

3. Wait for Gradle sync
4. Use **Build → Build Bundle(s) / APK(s) → Build APK(s)** to rebuild

Package ID: `com.creatorworkspace.app`

## Rebuild APK from terminal

```bash
cd mobile
npm install

# Set SDK + JDK (Windows PowerShell)
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-17.0.20.8-hotspot"

cd android
.\gradlew.bat assembleRelease
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

## Expo Go (dev)

```bash
cd mobile
npx expo start
```

## Screens

1. **Upload** — browse library or pick a recent asset  
2. **Select Platforms** — toggle LinkedIn / Instagram / Reddit / X  
3. **Generated Results** — platform-formatted post previews  

## Signing

Release builds use `credentials/release.keystore`:

| Field | Value |
|-------|-------|
| Alias | `creatorworkspace` |
| Store password | `creatorworkspace` |
| Key password | `creatorworkspace` |

Replace this keystore before publishing to Play Store.
