import { MessageBuilder, Webhook } from 'discord-webhook-node';
import moment from 'moment';
import { DISCORD_ERROR_NOTIFY_WEBHOOK_URL, SERVER_NAME, SERVER_URL, VELORONA_LOGO_URL } from '../config/constants';

const webhook = new Webhook(DISCORD_ERROR_NOTIFY_WEBHOOK_URL);

const DiscordPingService = {
  ping: async () => {
    await webhook.send('Ping pong!');
  },

  message: async (message: string) => {
    await webhook.send(message);
  },

  error: async (error: Error) => {
    const date = moment().format('dddd, MMM Do YYYY, hh:mm:ss A');

    const embed = new MessageBuilder()
      .setText('@here')
      .setTitle('Error : ' + error.name)
      .setDescription('```' + error + '```')
      .setAuthor(SERVER_NAME, VELORONA_LOGO_URL, SERVER_URL)
      .addField('Occured At:', date)
      .setColor(16720128)
      .setFooter(SERVER_NAME, VELORONA_LOGO_URL)
      .setTimestamp();
    return await webhook.send(embed);
  },
};
export default DiscordPingService;
