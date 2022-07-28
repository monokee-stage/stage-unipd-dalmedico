<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          router
          exact
          @click="gotToItem(item.to)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >

      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>

        <v-list-item

          @click="dialogLanguage=true"
        >

          <v-list-item-action>
            <v-icon>
              mdi-flag-outline
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>
            {{ $t('words.Chooselanguage') }}
          </v-list-item-title>
        </v-list-item>
        <v-dialog
          v-model="dialogLanguage"
          width="40%"
        >
          <template>
            <v-row>
              <v-col cols="12">
                <v-select
                  menu-props="auto"
                  :menu-props="{ bottom: true, offsetY: true }"
                  :items="language"
                  :select="selectLanguage"
                >
                </v-select>
              </v-col>
              <v-col align="center">
                <v-btn
                  color="red lighten-2"
                  @click="selectLanguage()"
                >
                  {{ $t('words.edit') }}
                </v-btn>
              </v-col>
            </v-row>


          </template>

        </v-dialog>
      </v-list>

    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      dialogLanguage: undefined,
      CloseOnClick: true,
      language: ['English', 'Italian'],
      lang: ['en', 'it'],

      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',

          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-account',
          title: 'Form',
          to: '/FormPage'
        },
        {
          icon: 'mdi-table',
          title: 'Table',
          to: '/table-page'
        },
        {
          icon: 'mdi-checkbox-marked-circle',
          title: 'ProvaValidate',
          to: '/provaValidate',
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  watch: {},
  emits: {
    changePat: undefined,
  },
  methods: {
    gotToItem(page) {
      this.$router.push(
        this.localePath({
          path: page,
        }),
      )
    },
    selectLanguage() {
      if (this.$i18n.locale == 'it') {
        this.$i18n.setLocale('en')
      } else {
        this.$i18n.setLocale('it')
      }
    }
  }
}
</script>
