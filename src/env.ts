import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars( {
    PUBLIC_VERSION: {
        public: true,
        static: true,
        description: "Application version displayed in the footer (set by the CI)",
        schema: ( value ) => value || "0.0.1"
    }
} );
