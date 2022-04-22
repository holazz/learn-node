基于回调的 api:

``` js
import * as fs from 'fs'
```

基于 promise 的 api:

``` js
import * as fsp from 'fs/promises'
```

**文件删除**

``` js
try {
  await fsp.unlink('./tmp/1.txt')
  console.log('删除成功')
} catch (e) {
  console.error('删除失败:', e.message)
}
```

**判断文件权限**

``` js
try {
  await fsp.access('./tmp/1.txt')
  console.log('can access')
} catch (error) {
  console.error('cannot access:', error.message)
}
```

> 不建议在调用 fsPromises.open() 之前使用 fsPromises.access() 检查文件的可访问性。


**向文件追加内容**

``` js
try {
  await fsp.access('./tmp/1.txt')
  console.log('can access')
} catch (error) {
  console.error('cannot access:', error.message)
}
```
