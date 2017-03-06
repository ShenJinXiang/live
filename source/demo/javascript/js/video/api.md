# api

## method

### canPlayType()
检查类型是否可以播放，返回值：'maybe'、'probably'

### play()
开始播放

### pause()
暂停

## property

### currentTime
通过设置currentTime属性进行定点播放

### volume
表示播放音量，结余0~1之间，将muted属性设置为true进入静音模式，设置为false则会恢复之前指定的音量

### muted
静音

### initialTime
指定媒体的开始时间，单位为妙，通常是'0'

### duration
指定媒体的时长，单位是秒，必须在元数据加载完以后才能查到准确的值

### playbackRate
指定播放速度 1.0 表示正常，大于1表示快进，0~1之间表示慢放

### defaultPlaybackRate
不管是否调用play()方法来播放媒体，playbackRate属性默认值都会设置成defaultPlaybackRate的值

### controls
是否在浏览器中显示播放控件，true表示显示，反之隐藏

### loop
指定媒体是否需要循环播放 true表示循环播放，false表示播放到最后就停止

### preload
指定用户开始播放媒体之前，是否或者多少媒体内容需要预加载
'none'表示不需要预加载数据
'metadata'表示时长、比特率、帧大小之类的元数据需要家长
'auto'表示浏览器应对预加载它认为合适的媒体内容

### autoplay
指定当已经缓冲足够多的媒体内容时是否需要自动开始播放

### paused
只读属性，如果播放器暂停，paused属性值为'true'

### seeking
只读属性，如果播放器正在调到一个新的播放点，那么seeking属性值为'true'

### ended
如果播放完美体并且停下来，那么ended属性值为'true'，如果loop属性为true，那么ended属性值永远不为'true'

### played
返回已经播放的时间段

### buffered
返回当前已经缓冲的时间段

### seekable
返回当前播放器需要跳到的时间段


## event

### loadstart
开始请求媒体数据内容时触发

### progress
正在通过网络加载媒体内容，每秒触发2~8次

### loadedmetadata 
媒体元数据已经加载完成触发

### loadeddata
媒体内容首次加载完毕

### canplay
已经加载了一些媒体内容，可以开始播放

### canplaythrough 
所有媒体内容加载完毕，可以流畅播放

### suspend
已经缓冲大量数据，暂时停止下载

### stalled
尝试加载数据，但是无法获取到数据

### play
调用play()方法

### waiting

### playing
已经开始播放媒体文件

### timeupdate
currentTime属性发展改变是，触发

### pause
调用了pause()方法，暂停了播放

### seeking
将当前播放事件调至一个未缓冲的时间点，导致停止播放，此时seeking属性值为'true'

### seeked
seeking属性值又变回false

### ended
媒体播放完毕，播放停止

### durationchange
duration属性值发生改变

### volumechange
volume或者muted属性值发生改变

### ratechange
playbackRate或defaultPlaybackRate发生改变

### error
网络错误或其他其他错误，阻止了媒体内容的加载
