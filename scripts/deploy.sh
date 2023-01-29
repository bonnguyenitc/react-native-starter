#!/bin/bash

set -e

now=$(date +'%d/%m/%Y - %H:%M')
read -r -p 'Enter the platform (ANDROID|IOS): ' platform
read -r -p 'Enter the environment (DEV|STG|PROD): ' environment
read -r -p 'Enter the store (deploygate|store): ' store

platform=${platform:-ios}
environment=${environment:-prod}
format=""
store=${store:-store}
platform="$(tr [A-Z] [a-z] <<< "$platform")"
environment="$(tr [A-Z] [a-z] <<< "$environment")"
store="$(tr [A-Z] [a-z] <<< "$store")"
if [ "$platform" == android ]
then
  read -r -p 'Format (APK|AAB): ' format
  format=${format:-APK}
  format="$(tr [A-Z] [a-z] <<< "$format")"
else
  read -r -p 'Format (ADHOC|TF): ' format
  format=${format:-ADHOC}
  format="$(tr [A-Z] [a-z] <<< "$format")"
fi


if [ "$platform" == android ]
then
  if [ "$environment" == dev ]
  then
    if [ "$format" == apk ]
    then
      npx jetify
      cd android
      ENVFILE=.env.development ./gradlew assembleDevelopmentRelease
      open "app/build/outputs/apk/development/release"
      if [ "$store" == deploygate ]
      then
        dg deploy "app/build/outputs/apk/development/release/app-development-release.apk" --message "Android Development - $now"
      fi
    else
      npx jetify
      cd android
      ENVFILE=.env.development ./gradlew bundleDevelopmentRelease
    fi
  elif [ "$environment" == stg ]
  then
    if [ "$format" == apk ]
    then
      npx jetify
      cd android
      ENVFILE=.env.staging ./gradlew assembleStagingRelease
      open "app/build/outputs/apk/staging/release"
      if [ "$store" == deploygate ]
      then
        dg deploy "app/build/outputs/apk/staging/release/app-staging-release.apk" --message "Android Staging - $now"
      fi
    else
      npx jetify
      cd android
      ENVFILE=.env.staging ./gradlew bundleStagingRelease
    fi
  else
    if [ "$format" == apk ]
    then
      npx jetify
      cd android
      ENVFILE=.env.production ./gradlew assembleProductionRelease
      open "app/build/outputs/apk/production/release"
      if [ "$store" == deploygate ]
      then
        dg deploy "app/build/outputs/apk/production/release/app-production-release.apk" --message "Android Production - $now"
      fi
    else
      npx jetify
      cd android
      ENVFILE=.env.production ./gradlew bundleProductionRelease
    fi
  fi
else
  if [ "$environment" == dev ]
  then
    cd ios
    pod install
    # xcrun agvtool next-version -all
    xcodebuild -workspace starter.xcworkspace -scheme "development" -sdk iphoneos -configuration Release clean
    xcodebuild -workspace starter.xcworkspace -scheme "development" -sdk iphoneos -configuration Release archive -archivePath "$PWD"/build/starter.xcarchive
    xcodebuild -exportArchive -archivePath $PWD/build/starter.xcarchive -exportOptionsPlist DevelopmentExportOptions.plist -exportPath "$PWD"/build
    # dg deploy "build/development.ipa" --message "IOS Development - $now"
  elif [ "$environment" == stg ]
  then
    cd ios
    pod install
    # xcrun agvtool next-version -all
    xcodebuild -workspace starter.xcworkspace -scheme "staging" -sdk iphoneos -configuration Release clean
    xcodebuild -workspace starter.xcworkspace -scheme "staging" -sdk iphoneos -configuration Release archive -archivePath "$PWD"/build/starter.xcarchive
    xcodebuild -exportArchive -archivePath $PWD/build/starter.xcarchive -exportOptionsPlist StagingExportOptions.plist -exportPath "$PWD"/build
    # dg deploy "build/staging.ipa" --message "IOS Staging - $now"
  else
    read -r -p 'Enter Apple ID username: ' username
    read -r -p 'Enter Apple ID password: ' password

    cd ios
    pod install
    # xcrun agvtool next-version -all
    xcodebuild -workspace starter.xcworkspace -scheme "production" -sdk iphoneos -configuration Release clean
    xcodebuild -workspace starter.xcworkspace -scheme "production" -sdk iphoneos -configuration Release archive -archivePath "$PWD"/build/starter.xcarchive
    xcodebuild -exportArchive -archivePath "$PWD"/build/starter.xcarchive -exportOptionsPlist ProductionExportOptions.plist -exportPath "$PWD"/build
    # xcrun altool --upload-app --file "build/production.ipa" --username "${username}" --password "${password}"
  fi
fi
