package com.myapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/*
 * CommunicationNativeModule  2019-04-18
 * Copyright (c) 2019 HYB Co.Ltd. All right reserved.
 *
 */
/*
 * class description here
 * @author Jackson
 * @version 1.0.0
 * since 2019 04 18
 */
public class CommunicationNativeModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext mReactApplicationContext;

    public CommunicationNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactApplicationContext=reactContext;
    }

    @Override
    public String getName() {
        return "CommunicationNative";
    }









}