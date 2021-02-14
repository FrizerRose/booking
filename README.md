# vue_starter

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```sh
git checkout -b feature/ime-featurea
Workflow:
git branch (provjeriš da si na release branchu)
git checkout -b feature/ime-featurea
tamo addaš, commitaš, pushaš bez briga
kad si gotov sa featurom i pusho si sve na njega
git checkout release-***
git merge feature/ime-featura
git push
```

```sh
Na kraju dana
tko god zadnji radi navečer
ode u master
(git checkout master)
i unutra merga današnji release
(git merge release-xxxxx)
git push origin master
i kreira sutrašnji release branch
git checkout -b release-xyxy+1
git push origin release-xyxy+1
```
