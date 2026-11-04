import type { Context, Fragment } from "koishi";
export async function pushLeaderboardMessage(ctx: Context, prefixedChannelId: string, content: Fragment) {
  const separator = prefixedChannelId.indexOf(':');
  const platform = prefixedChannelId.slice(0, separator);
  const channelId = prefixedChannelId.slice(separator + 1);
  if (platform !== 'chronocat') {
    const ids = await ctx.broadcast([prefixedChannelId], content);
    if (!ids?.length) throw new Error('Leaderboard broadcast returned no message IDs');
    return ids;
  }
  const channels = await ctx.database.get('channel', { id: channelId, platform });
  const channel = channels[0];
  if (!channel || (channel.flag & 4)) throw new Error('Leaderboard channel is unavailable or silent');
  const bot = ctx.bots.find(bot => bot.platform === platform && bot.selfId === channel.assignee && bot.online);
  if (!bot) throw new Error('Assigned leaderboard bot is offline');
  // Chronocat rejects the referrer sent by Koishi 4.18's broadcast(guildId).
  const ids = await bot.sendMessage(channelId, content);
  if (!ids?.length) throw new Error('Chronocat returned no message IDs');
  return ids;
}
