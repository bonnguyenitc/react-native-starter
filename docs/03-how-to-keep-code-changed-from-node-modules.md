## How to keep code changed from node_modules

1. Run cmd

```
npx patch-package <package name>
```

2. Check patch file at react-native-starter/patches
3. Run cmd to patch

```
yarn patch
```

In project set up auto run patch-package after install package, so can ignore step 3
