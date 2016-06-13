package com.apprn;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;



/**
 * Created by yuchao on 6/12/16.
 */
public class ReactNativeActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() {
    return "ReactNativeActivity";
  }

  @Override
  protected boolean getUseDeveloperSupport() {
    return false;
  }

  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage()
    );
  }
}
