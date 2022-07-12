cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.CommonCordova",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/CommonCordova.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.Defaults",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/Defaults.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.Cordova",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/Cordova.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureContextProxy",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/DataCaptureContextProxy.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureViewProxy",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/DataCaptureViewProxy.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.CameraProxy",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/CameraProxy.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.FeedbackProxy",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/FeedbackProxy.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.VolumeButtonObserverProxy",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Cordova/VolumeButtonObserverProxy.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.Camera",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Camera.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Camera+Related",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Camera+Related.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Common",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Common.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureContext",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/DataCaptureContext.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureContext+Related",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/DataCaptureContext+Related.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureView",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/DataCaptureView.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureView+Related",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/DataCaptureView+Related.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Serializeable",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Serializeable.js",
      "pluginId": "scandit-cordova-datacapture-core"
    },
    {
      "id": "scandit-cordova-datacapture-core.LocationSelection",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/LocationSelection.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Viewfinder",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Viewfinder.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Viewfinder+Related",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Viewfinder+Related.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.Feedback",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/Feedback.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.DataCaptureVersion",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/DataCaptureVersion.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-core.VolumeButtonObserver",
      "file": "plugins/scandit-cordova-datacapture-core/www/js/VolumeButtonObserver.js",
      "pluginId": "scandit-cordova-datacapture-core",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.Cordova",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/Cordova/Cordova.js",
      "pluginId": "scandit-cordova-datacapture-barcode"
    },
    {
      "id": "scandit-cordova-datacapture-barcode.Defaults",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/Cordova/Defaults.js",
      "pluginId": "scandit-cordova-datacapture-barcode"
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeCaptureListenerProxy",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/Cordova/BarcodeCaptureListenerProxy.js",
      "pluginId": "scandit-cordova-datacapture-barcode"
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeTrackingListenerProxy",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/Cordova/BarcodeTrackingListenerProxy.js",
      "pluginId": "scandit-cordova-datacapture-barcode"
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeSelectionProxy",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/Cordova/BarcodeSelectionProxy.js",
      "pluginId": "scandit-cordova-datacapture-barcode"
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeSelectionListenerProxy",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/Cordova/BarcodeSelectionListenerProxy.js",
      "pluginId": "scandit-cordova-datacapture-barcode"
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeTrackingBasicOverlayProxy",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/Cordova/BarcodeTrackingBasicOverlayProxy.js",
      "pluginId": "scandit-cordova-datacapture-barcode"
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeTrackingAdvancedOverlayProxy",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/Cordova/BarcodeTrackingAdvancedOverlayProxy.js",
      "pluginId": "scandit-cordova-datacapture-barcode"
    },
    {
      "id": "scandit-cordova-datacapture-barcode.SparkCaptureListenerProxy",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/Cordova/SparkCaptureListenerProxy.js",
      "pluginId": "scandit-cordova-datacapture-barcode"
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeCapture",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/BarcodeCapture.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeCapture+Related",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/BarcodeCapture+Related.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.Barcode",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/Barcode.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeCaptureSettings",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/BarcodeCaptureSettings.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeTracking",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/BarcodeTracking.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeTracking+Related",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/BarcodeTracking+Related.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeTrackingSettings",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/BarcodeTrackingSettings.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.TrackedBarcodeView",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/TrackedBarcodeView.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeSelection",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/BarcodeSelection.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeSelectionSettings",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/BarcodeSelectionSettings.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.BarcodeSelection+Related",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/BarcodeSelection+Related.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.SparkCaptureSettings",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/SparkCaptureSettings.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.SparkCapture+Related",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/SparkCapture+Related.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "scandit-cordova-datacapture-barcode.SparkCapture",
      "file": "plugins/scandit-cordova-datacapture-barcode/www/js/SparkCapture.js",
      "pluginId": "scandit-cordova-datacapture-barcode",
      "merges": [
        "Scandit"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-device": "2.1.0",
    "cordova-plugin-splashscreen": "6.0.1",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "scandit-cordova-datacapture-core": "6.13.1",
    "scandit-cordova-datacapture-barcode": "6.13.1",
    "cordova-plugin-ionic-webview": "5.0.0"
  };
});