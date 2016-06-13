package com.apprn;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

/**
 * Created by yuchao on 6/13/16.
 */
public class MainActivity extends AppCompatActivity {

  Button rnBtn;

  @Override
  protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    rnBtn = (Button) findViewById(R.id.rn_btn);
    rnBtn.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        Intent intent = new Intent(MainActivity.this, CustomerReactActivity.class);
        startActivity(intent);
      }
    });
  }


}
