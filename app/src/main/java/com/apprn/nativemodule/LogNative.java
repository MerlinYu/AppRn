package com.apprn.nativemodule;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by yuchao on 7/19/16.
 */
public class LogNative  extends ReactContextBaseJavaModule{

  private static final String TAG = "LogNative";
  public LogNative(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "LogNative";
  }

  @ReactMethod
  public void d(String log) {
    if (null == log) {
      Log.d(TAG,"log = null");
    } else {
      Log.d(TAG, log);
    }

  }

  @ReactMethod
  public void v(String log) {
    if (null == log) {
      Log.v(TAG,"log = null");
    } else {
      Log.v(TAG, log);
    }

  }



}
