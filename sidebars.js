module.exports = {
  someSidebar: {
    Setup: [
        'install',
        'integrating',
        'mobile',
        'javascript-arguments',
        'upgrading',
        'development/quick-guide',
        'chat/multiple-languages'
    ],
    Design: [
        'theme/theme',
        'theme/back-office-theme',
        'theme/personal-theme'
    ],
   Users: [
        'users/account',
        'users/users-groups',
        'users/users-roles',
        'users/users-users',
        'users/users-login-options',
        'permission',
        'invisible-mode',
        'operators-chat',
        'offline-online-automation',
        'auto-assignment',
        'users/password-requirements',
        'users/importing',
        'users/auto-login',
        'users/users-actions'
    ],
    Chat: [
        'chat/chat',
        'chat/bbcode',
        'chat/configuration',
        'chat/chat-tabs',
        'chat/chat-popup',
        'chat/multiple-clients',
        'chat/events-tracking',
        'chat/list',
        'chat/unread-chat-notifications',
        'dashboard',
        'chat/offline',
        'chat/start-chat-form-settings',
        'chat/statistic',
        'custom-fields-and-prefill',
        'chat/transferring-chat',
        'co-browsing',
        'commands',
        'chat/chat-status',
        'chat/geo-configuration',
        'chat/synchronization-sound',
        'need-help',
        'chat/multiple-domains',
        'voice_messages',
        'chat/speech-to-text',
        'chat/survey',
        'chat/subject',
        'paid-chats',
        'online-hours',
        'priority',
        'proactive',
        'canned',
        'auto-responder',
        'anonymize',
        'auto-close-delete',
        'chat/files',
        'chat/web-push-notifications',
    ],
    Department: [
        'department/department',
        'department-transfer',
        'department/product'
    ],
    Bot: [
        'how-to-use-bot',
        'bot/triggers',
        'bot/multiple-languages',
        {
            type: 'category',
            label: 'Response types',
            items: [
                'bot/bot-carousel',
                'bot/bot-text',
                'bot/bot-list',
                'bot/bot-button-list',
                'bot/collect-custom-attribute',
                'bot/rest-api',
                'bot/trigger-body',
                'bot/bot-video',
                'bot/execute-js',
                'bot/alert-icon',
                'bot/match-action',
                'bot/check-conditions',
                'bot/bot-update-current-chat'
            ]
        },
        {
            type: 'category',
            label: 'Use Cases',
            items: [
                'bot/collecting-information',
                'bot/validate-information',
                'bot/integrating-any-ai-bot-without-coding',
                'bot/integrating-any-ai-bot',
                'bot/username-based-workflow',
                'bot/rest-api-to-fetch-customer-info',
                'bot/rasa-integration',
                'bot/rasa-integration-intent',
                'bot/rasa-intent-entities',
                'bot/rasa-faq',
                'bot/sentiment-analysis',
                'bot/deeppavlov-faq'
            ]
        },
        {
            type: 'category',
            label: 'How to',
            items: [
                'bot/transfer-bot-to-bot'
            ]
        }
    ],
    Visitors: [
        'blocking',
        'online-visitors'
    ],
    System: [
        'system/configuration',
        'smtp',
        'development/cronjob',
        'system/system-commands',
        'time-zone',
        'audit/audit',
        'system/clearing-cache',
        'system/languages-configuration'
    ],
    Modules: [
        'modules/browse-offers',
        'modules/chatbox',
        'modules/faq',
        'modules/forms',
        'modules/questionary'
    ],
    Developing: [
        'hooks',
        'development/webhooks',
        'debug',
        {
            type: 'category',
            label: 'Extending',
            items: [
                'extending/override-quick',
                'extending/writing-extension',
                'extending/override-module',
                'extending/override-template',
                'development/override-class'
            ]
        },
        'development/hosting-on-digitalocean',
        'development/install-cli',
        'development/orm',
        'development/modifying-widget',
        'development/rest-api',
        'development/move-chat',
        'development/unbrand',
        'nginx-configuration-tips',
        'architecture',
        'performance',
        'back-office-theme',
        'node-js',
        'language',
        'development/auto-login',
        'development/single-sign-on',
        'development/docker',
        'development/site-access',
        'development/remove-index-php',
        'development/http-and-https'
    ],
    Integration: [
        'integrating/opencart',
        'google-analytics',
        'chrome-extension'
    ]
  },
};
