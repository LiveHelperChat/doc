module.exports = {
    someSidebar: {
        Setup: [
            'install',
            'integrating',
            'mobile',
            'voice-video-screenshare',
            'voice_messages',
            'javascript-arguments',
            'upgrading',
            'development/quick-guide',
            'chat/multiple-languages',
            'security'
        ],
        Design: [
            'theme/theme',
            'theme/chat-window',
            'theme/back-office-theme',
            'theme/personal-theme'
        ],
        Users: [
            'users/account',
            'users/account-edit',
            'users/users-groups',
            'users/users-roles',
            'users/users-users',
            'users/users-login-options',
            'permission',
            'users/advanced-permissions',
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
            'chat/helpline-and-crisis-solution',
            'chat/events-tracking',
            'chat/list',
            'chat/unread-chat-notifications',
            'dashboard',
            'chat/offline',
            'chat/automatic-translations',
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
            'replaceable-variables',
            'auto-responder',
            'anonymize',
            'auto-close-delete',
            'chat/files',
            'chat/participant',
            'chat/web-push-notifications',
            'chat/messages-content-protection'
        ],
        Mail: [
            'mail/intro',
            'mail/oauth',
            'mail/close-from-chat',
            'mail/list',
            'mail/mail-window',
            'mail/lifespan',
            'mail/mail-auto-responder',
            'mail/sample-mailbox'
        ],
        Department: [
            'department/department',
            'department-transfer',
            'department/product',
            'department/brand'
        ],
        Bot: [
            'how-to-use-bot',
            'bot/triggers',
            'bot/conditions',
            'bot/multiple-languages',
            'bot/ai-integration-flows',
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
                    'bot/bot-update-current-chat',
                    'bot/restrict-execution-more-than-defined-times',
                    'bot/log-action',
                    'bot/send-mail',
                    'bot/iframe'
                ]
            },
            {
                type: 'category',
                label: 'Use Cases',
                items: [
                    'bot/collecting-information',
                    'bot/collecting-information-two-tries',
                    'bot/validate-information',
                    'bot/text-menu-bot',
                    'bot/integrating-any-ai-bot-without-coding',
                    'bot/integrating-any-ai-bot',
                    'bot/username-based-workflow',
                    'bot/rest-api-to-fetch-customer-info',
                    'bot/rasa-integration',
                    'bot/rasa-integration-intent',
                    'bot/rasa-intent-entities',
                    'bot/rasa-faq',
                    'bot/sentiment-analysis',
                    'bot/sentiment-analysis-per-message',
                    'bot/deeppavlov-faq',
                    'bot/verify-email-by-bot-and-rest-api',
                    'bot/chatgpt-integration',
                    'bot/chatgpt-responses',
                    'bot/deepseek-integration',
                    'bot/ollama-integration',
                    'bot/gemini-integration',
                    'bot/summarize-with-ai'
                ]
            },
            {
                type: 'category',
                label: 'How to',
                items: [
                    'bot/transfer-bot-to-bot',
                    'bot/multiple-unknown-messages',
                    'bot/survey-control-from-bot',
                    'bot/operator-not-responding',
                    'bot/show-offline-form-if-no-online-operators',
                    'bot/transfer-to-bot-if-not-accepted',
                    'bot/execute-bot-of-transferred-department'
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
            'email-templates',
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
            'development/incoming-webhooks',
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
            'bot/custom-variables-extension',
            'development/working-with-messages',
            'development/common-classes',
            'development/modifying-widget',
            'development/rest-api',
            'development/move-chat',
            'development/unbrand',
            'nginx-configuration-tips',
            'architecture',
            'performance',
            'development/reducing-request-number',
            'hosting-variations',
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
            'integrating/jitsi',
            'integrating/GLPI',
            'integrating/opencart',
            'integrating/chat-api-com',
            'integrating/third-party-back-office',
            'integrating/custom-post-survey',
            'google-analytics',
            'chrome-extension',
            'integrating/whatsapp',
            'integrating/messagebird-whatsapp',
            'integrating/cloudtalk',
            'integrating/slack-notification',
            'integrating/waha',
            'integrating/rezdy'
        ]
    },
};
