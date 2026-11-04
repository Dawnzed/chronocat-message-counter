import { Context, Schema } from "koishi";
export declare const name = "message-counter";
export declare const inject: {
    required: string[];
    optional: string[];
};
export declare const usage = "## \u4F7F\u7528\n\n\u53D1\u9001 `msgcount.\u6392\u884C\u699C` \u67E5\u770B\u672C\u9891\u9053\u7684\u53D1\u8A00\u6392\u884C\uFF0C`msgcount.\u67E5\u8BE2` \u770B\u67D0\u4E2A\u4EBA\u7684\u53D1\u8A00\u6B21\u6570\u4E0E\u6392\u540D\u3002\n\n## \u6307\u4EE4\n\n| \u6307\u4EE4 | \u8BF4\u660E |\n| --- | --- |\n| `msgcount` | \u67E5\u770B\u5E2E\u52A9 |\n| `msgcount.\u67E5\u8BE2 [\u7528\u6237]` | \u67E5\u770B\u53D1\u8A00\u6B21\u6570\u4E0E\u6392\u540D |\n| `msgcount.\u6392\u884C\u699C [\u4EBA\u6570]` | \u67E5\u770B\u672C\u9891\u9053\u6392\u884C |\n| `msgcount.\u9891\u9053\u6392\u884C\u699C [\u4EBA\u6570]` | \u67E5\u770B\u5404\u9891\u9053\u6392\u884C |\n| `msgcount.\u4E0A\u4F20\u67F1\u72B6\u6761\u80CC\u666F` | \u4E0A\u4F20\u4E2A\u4EBA\u67F1\u72B6\u6761\u5E95\u56FE |\n| `msgcount.\u91CD\u8F7D\u8D44\u6E90` | \u91CD\u8F7D\u56FE\u6807\u3001\u80CC\u666F\u4E0E\u5B57\u4F53\uFF0C\u6743\u9650 2 |\n| `msgcount.\u6E05\u7406\u7F13\u5B58` | \u6E05\u7406\u8FC7\u671F\u5934\u50CF\u7F13\u5B58\uFF0C\u6743\u9650 3 |\n| `msgcount.\u6E05\u7A7A\u8BB0\u5F55` | \u6E05\u7A7A\u5168\u90E8\u53D1\u8A00\u8BB0\u5F55\uFF0C\u6743\u9650 3 |\n\n\u65F6\u95F4\u8303\u56F4\uFF1A`-d` \u4ECA\u65E5\u3001`--yd` \u6628\u65E5\u3001`-w` \u672C\u5468\u3001`-m` \u672C\u6708\u3001`-y` \u4ECA\u5E74\u3001`-t` \u603B\u8BA1\u3002\u5173\u95ED\u300C\u7EDF\u8BA1\u6628\u65E5\u53D1\u8A00\u300D\u540E\uFF0C`--yd` \u548C\u300C\u6293\u9F99\u738B\u300D\u4E0D\u53EF\u7528\u3002";
export interface Config {
    /** 是否统计 Bot 自己发送的消息。 */
    isBotMessageTrackingEnabled: boolean;
    /** 是否启用跨机器人消息去重（同一群多个机器人时防止重复计数）。 */
    enableCrossBotDeduplication: boolean;
    /** 是否统计昨日发言。 */
    enableYesterdayRanking: boolean;
    /** 排行榜默认显示的人数。 */
    defaultMaxDisplayCount: number;
    /** 指令后面的数字最多能要到多少名；0 表示不设上限。 */
    maxDisplayCount: number;
    /** 是否在显示排行榜时补充时间信息。 */
    isTimeInfoSupplementEnabled: boolean;
    /** 是否在排行榜中显示用户消息占比。 */
    isUserMessagePercentageVisible: boolean;
    /** 在排行榜中全局隐藏的用户 ID 列表。 */
    hiddenUserIdsInLeaderboard: string[];
    /** 在频道排行榜中全局隐藏的频道 ID 列表。 */
    hiddenChannelIdsInLeaderboard: string[];
    /** 是否将排行榜渲染为水平柱状图。 */
    isLeaderboardToHorizontalBarChartConversionEnabled: boolean;
    /** 生成的柱状图图片类型。 */
    imageType: "png" | "jpeg" | "webp";
    /** 头像缓存的有效期（秒）。设置为 0 可禁用缓存刷新。 */
    avatarCacheTTL: number;
    /** 头像获取失败后的重试间隔（秒）。 */
    avatarFailureCacheTTL: number;
    /** 页面加载等待事件，影响图片生成速度和稳定性。 */
    waitUntil: "load" | "domcontentloaded" | "networkidle0" | "networkidle2";
    /**
     * 生成水平柱状图时，渲染页面的视口宽度（像素）。
     * @default 1080
     */
    chartViewportWidth: number;
    /**
     * 渲染时的设备像素比 (DPR)。
     * 更高的值可以生成更清晰的图片（例如，设置为 2 相当于 2x 图），但也会增加图片文件体积。
     * @default 1
     */
    deviceScaleFactor: number;
    /** 是否将自定义图标显示在柱状条的末端。 */
    shouldMoveIconToBarEndLeft: boolean;
    /** 是否在生成水平柱状图时，在当前用户/群聊名称前显示★以高亮。 */
    showStarInChart: boolean;
    /** 排行榜中头像的形状。 */
    avatarShape: "circle" | "rounded" | "square";
    /** 刻度竖线是否压在柱状条之上。默认压在条上，关闭则由柱状条盖住刻度。 */
    gridLinesOverBars: boolean;
    /**
     * 排行榜的发言次数与占比写在哪儿。
     * 默认紧跟在自己那根条的尾巴后面；关闭则右对齐成固定的两列。
     */
    valueFollowsBar: boolean;
    /** 自定义背景图在进度条区域的不透明度。 */
    horizontalBarBackgroundOpacity: number;
    /** 自定义背景图在整行背景的不透明度。 */
    horizontalBarBackgroundFullOpacity: number;
    /** 允许上传的背景图最大宽度（像素）。 */
    maxBarBgWidth: number;
    /** 允许上传的背景图最大高度（像素）。 */
    maxBarBgHeight: number;
    /** 允许上传的背景图最大体积（MB）。 */
    maxBarBgSize: number;
    /** 图片整体背景的类型。 */
    backgroundType: string;
    /** 渐变背景的配色预设。 */
    gradientPreset: string;
    /** 自定义渐变的起始颜色。 */
    gradientStartColor: string;
    /** 自定义渐变的结束颜色。 */
    gradientEndColor: string;
    /** 自定义渐变的角度（度）。 */
    gradientAngle: number;
    /** 纯色背景的颜色。 */
    solidColor: string;
    /** 图片背景的地址（网络链接或本地文件路径）。 */
    backgroundImageSource: string;
    /** 图片背景的填充方式。 */
    backgroundImageFit: "cover" | "contain" | "stretch" | "repeat";
    /** 图片背景的模糊半径（像素）。 */
    backgroundBlur: number;
    /** 图片背景上的白色蒙版不透明度，用于提升文字可读性。 */
    backgroundMaskOpacity: number;
    /** API 背景配置。 */
    apiBackgroundConfig: apiBackgroundConfig;
    /** 自定义背景的 CSS 代码。 */
    backgroundValue: string;
    /** 水平柱状图 - 标题的字体。 */
    chartTitleFont: string;
    /** 水平柱状图 - 成员昵称和发言次数的字体。 */
    chartNicknameFont: string;
    /** 水平柱状图 - 字号倍率，1 即与 acumen 的 stats 图表同大。 */
    chartFontScale: number;
    /** 是否启用定时自动推送排行榜功能。 */
    autoPush: boolean;
    /** 是否在每日 0 点自动发送昨日排行榜。 */
    shouldSendDailyLeaderboardAtMidnight: boolean;
    /** 是否在每周一 0 点自动发送上周排行榜。 */
    shouldSendWeeklyLeaderboard: boolean;
    /** 是否在每月第一天 0 点自动发送上月排行榜。 */
    shouldSendMonthlyLeaderboard: boolean;
    /** 是否在每年第一天 0 点自动发送去年排行榜。 */
    shouldSendYearlyLeaderboard: boolean;
    /** 其他定时发送今日排行榜的时间点（24小时制）。 */
    dailyScheduledTimers: string[];
    /** 发送排行榜前是否发送提示消息。 */
    isGeneratingRankingListPromptVisible: boolean;
    /** 发送提示后等待多少秒再发送图片。 */
    leaderboardGenerationWaitTime: number;
    /** 需要接收自动推送的频道 ID 列表。 */
    pushChannelIds: string[];
    /** 是否向机器人所在的所有群聊推送。 */
    shouldSendLeaderboardNotificationsToAllChannels: boolean;
    /** "向所有群聊推送" 开启时的排除列表。 */
    excludedLeaderboardChannels: string[];
    /** 批量推送时，每个群之间的发送延迟（秒）。 */
    delayBetweenGroupPushesInSeconds: number;
    /** 延迟时间的随机波动范围（秒）。 */
    groupPushDelayRandomizationSeconds: number;
    /** 是否在每日 0 点自动禁言昨日发言最多的人。 */
    enableMostActiveUserMuting: boolean;
    /** 0 点后，等待多少秒再执行禁言操作。 */
    dragonKingDetainmentTime: number;
    /** 禁言时长（天）。 */
    detentionDuration: number;
    /** 在哪些频道中执行“抓龙王”操作。 */
    muteChannelIds: string[];
}
export declare const Config: Schema<Config>;
declare module "koishi" {
    interface Tables {
        message_counter_records: MessageCounterRecord;
        message_counter_state: MessageCounterState;
    }
}
interface apiBackgroundConfig {
    apiUrl: string;
    apiKey: string;
    responseType: string;
}
interface MessageCounterRecord {
    channelId: string;
    channelName: string;
    userId: string;
    username: string;
    userAvatar: string;
    todayPostCount: number;
    thisWeekPostCount: number;
    thisMonthPostCount: number;
    thisYearPostCount: number;
    totalPostCount: number;
    yesterdayPostCount: number;
}
interface MessageCounterState {
    key: string;
    value: Date;
}
export declare function apply(ctx: Context, config: Config): Promise<void>;
export {};
