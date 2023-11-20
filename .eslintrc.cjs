module.exports = {
    extends: '@it-incubator/eslint-config',
    rules: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        "perfectionist/sort-imports": [
            "error",
            {
                "custom-groups": {
                    "type": {
                        "react": "react"
                    },
                    "value": {
                        "nanostores": "@nanostores/**",
                        "react": ["react", "react-*"]
                    }
                },
                "groups": [
                    "type",
                    "react",
                    "nanostores",
                    ["builtin", "external"],
                    "internal-type",
                    "internal",
                    ["parent-type", "sibling-type", "index-type"],
                    ["parent", "sibling", "index"],
                    "side-effect",
                    "style",
                    "object",
                    "unknown"
                ],
                "internal-pattern": [
                    "@/components/**",
                    "@/stores/**",
                    "@/pages/**",
                    "@/lib/**"
                ],
                "newlines-between": "never",
                "order": "asc",
                "type": "natural"
            }
        ]
    }
}