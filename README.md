# travel
纯JS/CSS的在线躲避小游戏，鼠标操作飞机躲避星球，拯救迷失的宇航员。

躲过一颗小星球获得一分，拯救宇航员获得十分。

添加了银河系漫游指南的梗，比如黄金之心号的无限非概率驱动器，以及宇宙终极答案！42！

index.php 
主要是布局代码，采用php编写是因为php获取客户端IP代码简单，方便上传排行榜。

base.js
主要代码用来时时获取飞船坐标、星球的坐标、宇航员的坐标以及鼠标的坐标，通过飞船坐标是否进入星球坐标内判断两个div是否相撞。
星球通过不断随机的随机数来判断哪个星球下落以及下落速度，有一个基础速度来控制不同分段的速度，宇航员的位置以及飞行方向也是通过不断随机的随机数来控制。
当飞船接触到星球，调用上传api接口上传数据。

setscore.php内是Php的数据上传接口，接收客户端发送的ip，判断数据库内是否有相同的ip，若有，对比最高分数，若比最高分，则上传数据，否则不做动作。

getscore.php内是php的排行榜获取接口，获取数据库总排行榜的内容，按分数高低排序输出JSON数据。

个人比较偏好Rogue like游戏，所以想开发一个自己喜欢的轻游戏。虽然这个游戏没有到达真正的rogue like的标准，但是也是一个不错的不用上心的小游戏，也是我阶段内对我自己前端开发水平的一个检验。

大学第一次接触js的时候就想做一个贪吃蛇的游戏，但是直到现在因为canvas没有好好学习，对浏览器渲染画面不了解，无法用js+css+div的方法做出来，有几个思路，但是无法做到动态实现添加蛇尾巴并给其添加js代码令其跟随前一个尾巴div。

如果你们有好的思路，希望你能告诉我。
