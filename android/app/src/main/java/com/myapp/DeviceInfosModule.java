package com.myapp;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Nullable;

/*
 *   2019-04-17
 * Copyright (c) 2019 HYB Co.Ltd. All right reserved.
 *
 */
/*
 * class description here
 * @author Jackson
 * @version 1.0.0
 * since 2019 04 17
 */
public class DeviceInfosModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext mReactApplicationContext;

    public DeviceInfosModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactApplicationContext=reactContext;
    }

    @Override
    public String getName() {
        return "DeviceInfos";  // 模块名字
    }


    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        HashMap<String,Object> consyants=new HashMap<>();
        consyants.put("systemName","Android");
        consyants.put("systemVersion", Build.VERSION.RELEASE);
        consyants.put("defaultLanguage",getCurrentLanguage());
        consyants.put("appVersion",getAppVersion());
        return consyants;
    }


    private String getCurrentLanguage(){
        Locale current=getReactApplicationContext().getResources().getConfiguration().locale;
        if (Build.VERSION.SDK_INT>=Build.VERSION_CODES.LOLLIPOP){
            return current.toLanguageTag();
        }else {
            StringBuffer builder=new StringBuffer();
            builder.append(current.getLanguage());
            if (current.getCountry()!=null){
                builder.append("-");
                builder.append(current.getCountry());
            }
            return builder.toString();
        }
    }


    private String getAppVersion(){
        String appVersion="not available";
        try {
            PackageManager packageManager=this.mReactApplicationContext.getPackageManager();
            String packageName=this.mReactApplicationContext.getPackageName();
            PackageInfo info=packageManager.getPackageInfo(packageName,0);
            appVersion=info.versionName;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }

        return appVersion;

    }


}