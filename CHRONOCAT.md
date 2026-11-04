# Chronocat 维护版

基于上游 eacad9de4733c4a2fe371af7cf8c65e760b6410d（4.14.0），版本4.14.0-chronocat.1。

自动推送使用 src/push.ts。Chronocat 按数据库分配选择在线机器人、尊重静默频道，调用 sendMessage(channelId, content)，避免 Koishi 广播把 guildId 当作 referrer 传给不接受该字段的 Chronocat。空消息 ID 和发送异常均按失败处理。其他平台继续使用广播。

安装使用本仓库固定提交的归档 URL，而非会变动的分支或官方 npm 版本。仓库提交 lib 运行产物，GitHub 源码归档可直接安装，无需服务器执行构建脚本。保留原包名、插件名、配置和数据库表，不与官方版本同时加载。

开发：安装开发依赖后 npm run build、npm test。升级上游先合并源码并通过测试，再生成产物提交，最后更新生产固定提交及锁文件。不要直接在市场升级回官方包。不得在仓库提交运行数据、配置、密钥、聊天日志或个人信息。

4.14增加前三名奖牌圈、冠军柔光和皇冠，并保留真实名次；自动推送Chronocat兼容和失败检测保持。
