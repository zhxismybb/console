exports.id = "locale-tc";
exports.modules = {

/***/ "./locales/tc/l10n-platformSettings-notificationManagement-notificationConfiguration.js":
/*!**********************************************************************************************!*\
  !*** ./locales/tc/l10n-platformSettings-notificationManagement-notificationConfiguration.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * This file is part of KubeSphere Console.\n * Copyright (C) 2019 The KubeSphere Console Authors.\n *\n * KubeSphere Console is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as published by\n * the Free Software Foundation, either version 3 of the License, or\n * (at your option) any later version.\n *\n * KubeSphere Console is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.\n */\nmodule.exports = {\n  // Banner\n  NOTIFICATION_MANAGEMENT: '通知管理',\n  NOTIFICATION_CONFIGURATION: '通知配置',\n  NOTIFICATION_CONFIGURATION_DESC: 'Xcloud supports notification configuration for multiple notification channels. You can set servers and recipients, and enable or disable notifications.',\n  NOTIFICATION_EMAIL: '郵箱',\n  // Email\n  MAIL_TITLE: '郵箱',\n  INVALID_PORT_DESC: 'Please enter a valid port number.',\n  ENTER_PORT_NUMBER: '請輸入端口',\n  ALERTING_NAME: 'Alert name',\n  ALERTING_SEVERITY: 'Alert severity',\n  ADDRESS_EMPTY_DESC: 'Please enter an address.',\n  EMAIL_EMPTY_DESC: '請輸入郵箱',\n  SERVER_SETTINGS: '服務器设置',\n  RECIPIENT_SETTINGS: '接收設置',\n  NOTIFICATION_CONDITIONS: 'Notification Conditions',\n  CONTAINER: 'Container',\n  VALUES: 'Values',\n  CONDITION_OPERATOR: '操作者',\n  NOTIFICATION_CONDITION_SETTING_TIP: 'Operators <strong>Includes values</strong> and <b>Does not include values</b> require one or more label values. Use a carriage return to separate values.</br>Operators <b>Exists</b> and <b>Does Not Exist</b> determine whether a label exists, and do not require a label value.',\n  NOTIFICATION_CONDITION_SETTINGS_DESC: 'You will receive only notifications that meet the conditions.',\n  INCLUDES_VALUES: '包含值',\n  DOES_NOT_INCLUDE_VALUES: '不包含值',\n  EXISTS: 'Exists',\n  DOES_NOT_EXIST: 'Does not exist',\n  TAG_INPUT_PLACEHOLDER: 'Please enter the value and press Enter to confirm',\n  PATTERN_TAG_INVALID_TIP: 'Invalid label. The label can contain only uppercase and lowercase letters, numbers, hyphens (-), underscores (_), and dots (.), and must begin and end with an uppercase or lowercase letter or number.',\n  PATTERN_TAG_VALUE_INVALID_TIP: 'Invalid label values. The label values can only contain uppercase and lowercase letters, numbers, hyphens (-), underscores (_) and dots (.) and must begin and end with an uppercase or lowercase letter or number and be a maximum of 63 characters.',\n  INVALID_NOTIFICATION_CONDITION: '請填寫正確的通知條件。',\n  SEND_TEST_MESSAGE: '發送測試信息',\n  SEND_TEST_MESSAGE_DESC: 'After the configurations are complete, you can send a test message for verification.',\n  SEND_TEST_MESSAGE_SUCCESS_DESC: '驗證成功。已向您發送了一條測試消息，請查收。',\n  SMTP_SERVER_ADDRESS: 'SMTP 服務器地址',\n  USE_SSL_SECURE_CONNECTION: 'Use SSL secure connection',\n  SENDER_EMAIL: '發件人郵箱',\n  INVALID_EMAIL: '郵箱格式不合法',\n  MAIL_DESC: 'Configure email notifications by setting a server and recipients.',\n  INVALID_ADDRESS_DESC: 'Please enter a valid address.',\n  MAX_EAMIL_COUNT: 'You can add a maximum of {count} emails.',\n  SMTP_USER: 'SMTP Username',\n  SMTP_PASSWORD: 'SMTP Password',\n  ENTER_PASSWORD_TIP: 'Please enter the password.',\n  ENTER_RECIPIENT_EMAIL_DESC: 'Please add at lease one email address of a recipient.',\n  INVALID_EMAIL_ADDRESS_DESC: 'The email format is incorrect. Please enter a correct email address.',\n  SMTP_USER_EMPTY_DESC: 'Please enter a SMTP username.',\n  ADDED_SUCCESS_DESC: '添加成功。',\n  POD: '容器組',\n  UPDATE_SUCCESSFUL: 'Updated successfully.',\n  PATTERN_NAME_INVALID_TIP: 'Invalid name. The name can contain only lowercase letters, numbers, and hyphens (-).',\n  // DingTalk\n  DINGTALK_TITLE: 'DingTalk',\n  DingTalk: '釘釘',\n  DINGTALK_DESC: 'Configure DingTalk notifications by setting a conversation or chatbot.',\n  PLEASE_ENTER_VALUE_CUSTOM: '請輸入{value}。',\n  // DingTalk > Conversation Settings\n  CONVERSATION_SETTINGS: '會話設置',\n  CONVERSATION_ID: '會話 ID',\n  CONVERSATION_ID_TIP: '會話 ID 需要系統管理員進行配置才能獲取，如需設置請聯系系統管理員。',\n  DINGTALK_SETTING_TIP: '請設置會話或者群機器人。',\n  ENTER_CONVERSATION_ID_DESC: 'Please enter a conversation ID.',\n  MAX_CID_COUNT: 'You can add a maximum of {count} conversation IDs.',\n  CONVERSATION_ID_EXISTS: 'The conversation ID already exists. Please add another conversation ID.',\n  // DingTalk > DingTalk Chatbot\n  CHATBOT_SETTINGS: '群機器人設置',\n  KEYWORDS_LIST: 'Keyword List',\n  DINGTALK_CHATBOT_SECURITY_TIP: 'Please enter a secret or keywords',\n  ENTER_KEYWORD_DESC: '請輸入關鍵字。',\n  MAX_KEYWORD_COUNT: 'You can add a maximum of {count} keywords.',\n  KEYWORD_EXISTS: 'The keyword already exists. Please add another keyword.',\n  EMPTY_KEYWORDS_DESC: 'No keyword is added.',\n  DINGTALK_SECRET: '保密字典',\n  // WeCom\n  WeCom: '企業微信',\n  WECOM_TITLE: '企業微信',\n  WECOM_CORP_ID: 'Corporation ID',\n  WECOM_AGENT_ID: 'App AgentId',\n  WECOM_SECRET: 'App Secret',\n  RECIPIENT_SETTINGS_TIP: 'At least one item needs to be configured to receive notifications.',\n  ENTER_WECOM_CORP_ID_DESC: 'Please enter a corporation ID.',\n  ENTER_WECOM_AGENT_ID_DESC: 'Please enter an applicaiton AgentId.',\n  ENTER_WECOM_SECRET_DESC: 'Please enter an application Secret.',\n  WECOM_DESC: 'Configure WeCom notifications by setting a server and recipients.',\n  // WeCom > User ID\n  USER_ID: '用戶 ID',\n  TOUSER_LIST: 'Added User IDs',\n  WECOM_TOUSER_PLACEHOLDER: '用戶 ID',\n  EMPTY_TOUSER_DESC: 'No user ID is added.',\n  ENTER_TOUSER_TIP: 'Please enter a user ID.',\n  TOUSER_EXISTS: 'The user ID already exists. Please enter another user ID.',\n  MAX_TOUSER_COUNT: 'You can add a maximum of {count} users.',\n  // WeCom > Department ID\n  DEPARTMENT_ID: '部門 ID',\n  WECOM_TOPARTY_PLACEHOLDER: '部門 ID',\n  TOPARTY_LIST: 'Added Department IDs',\n  EMPTY_TOPARTY_DESC: 'No department ID is added.',\n  ENTER_TOPARTY_TIP: 'Please enter a department ID.',\n  TOPARTY_EXISTS: 'The department ID already exists. Please enter another department ID.',\n  MAX_TOPARTY_COUNT: 'You can add a maximum of {count} departments.',\n  // WeCom > Tag ID\n  TAG_ID: '標簽 ID',\n  TOTAG_LIST: 'Added Tag IDs',\n  WECOM_TOTAG_PLACEHOLDER: '標簽 ID',\n  EMPTY_TOTAG_DESC: 'No tag ID is added.',\n  ENTER_TOTAG_TIP: 'Please enter a tag ID.',\n  TOTAG_EXISTS: 'The tag ID already exists. Please enter another tag ID.',\n  MAX_TOTAG_COUNT: 'You can add a maximum of {count} tags.',\n  // Slack\n  SLACK_TITLE: 'Slack',\n  SLACK_TOKEN: 'Slack Token',\n  SLACK_TOKEN_DESC: 'Please enter a Slack token.',\n  SLACK_CHANNEL: 'Slack channel',\n  CHANNEL_SETTINGS: '接收頻道設置',\n  ADDED_CHANNELS: 'Added Channels',\n  EMPTY_CHANNEL_DESC: 'No channel is added.',\n  ADD_CHANNEL_DESC: 'Please add a channel.',\n  CHANNEL_EXISTS: 'The channel already exists. Please add another channel.',\n  CHANNEL_SETTINGS_DESC: 'Please add a channel.',\n  MAX_CHANNEL_COUNT: 'You can add a maximum of {count} channels.',\n  SLACK_DESC: 'Configure Slack notifications by setting a server and Slack channels.',\n  // Webhook\n  WEBHOOK_TITLE: 'Webhook',\n  WEBHOOK_URL_DESC: 'Please enter a webhook URL.',\n  VERIFICATION_TYPE: '驗證類型',\n  SKIP_TLS_VERFICATION: 'Skip TLS verification (insecure)',\n  VERIFICATION_TYPE_DESC: '請選擇驗證類型。',\n  BASIC_AUTH: 'Basic authentication',\n  NO_AUTH: '無須認證',\n  BEARER_TOKEN: 'Bearer token',\n  TOKEN: 'Token',\n  WEBHOOK_USERNAME_EMPTY_DESC: '請輸入用戶名稱',\n  WEBHOOK_PASSWORD_EMPTY_DESC: 'Please enter a password.',\n  WEBHOOK_TOKEN_EMPTY_DESC: 'Please enter a token.'\n};\n\n//# sourceURL=webpack:///./locales/tc/l10n-platformSettings-notificationManagement-notificationConfiguration.js?");

/***/ })

};