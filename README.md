# vue-app

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## getters
- this.$store.state.xxx
- mapGetters(['xxx'])
- mapGetters({
    newXXX:XXX
})
- getters ： {
    func (state, getters) {
        return 'xx'
    }
}

## mutations
- 改变vue中的状态
- 只能执行同步代码
## actions
- 提交mutations，让mutations去更改状态
- 能执行异步代码