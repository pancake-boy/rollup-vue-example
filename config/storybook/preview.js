import vuetify from './vuetify_storybook';

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

// eslint-disable-next-line import/prefer-default-export
export const decorators = [(storyFn, args) => ({
  vuetify,
  data: () => ({
    isVuetify: args.parameters.isVuetify,
  }),
  template: `
      <div>
        <v-app v-if="isVuetify">
          <v-main>
            <v-container fluid>
              <div>Based on Vuetify</div>
              <story/>
            </v-container>
          </v-main>
        </v-app>
        <div v-else>
          <div>Based on Design System</div>
          <div class="ht">
            <story/>
          </div>
        </div>
      </div>
    `,
})];
