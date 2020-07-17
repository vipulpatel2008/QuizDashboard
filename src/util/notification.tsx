import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';

export interface Message {
  type: 'success' | 'error' | 'warning' | 'info',
  title: string,
  description?: string,
}

/**
 * Show Notification
 *
 * @param {Message} message
 * @param {()=>void} onClose
 */
const openNotificationWithIcon = (message: Message, onClose: () => void, config?: ArgsProps) => {
  const baseConfig: ArgsProps = {
    message: message.title,
    description: message.description,
    onClose,
    duration: 5,
    ...config,
  };
  notification.destroy();
  notification[message.type]({
    ...baseConfig,
  });
};

export default openNotificationWithIcon;
