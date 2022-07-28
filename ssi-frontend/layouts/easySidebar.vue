<template>
  <v-app>
    <v-app-bar
      id="monokee-app-bar"
      elevation="0"
      app
      clipped-left
      color="#3CD4A0"

    >
      <!-- ICON TO TOGGLE SIDEBAR -->

      <v-btn icon @click.stop="toggleSidebar()">
        <v-icon :color="derivedColor">{{
            showSidebar === false ? 'mdi-menu' : 'mdi-arrow-left'
          }}
        </v-icon>
      </v-btn>
      <v-spacer/>

      <!-- Domain name -->
      <span
        :style="'color: ' + derivedColor"
        class="mr-8 title"
        style="font-weigth: 0; color: white !important"
      >
        Domain name
      </span>

      <!-- USER -->
      <div>
        <v-menu bottom offset-y>
          <template #activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-avatar size="40">
                <v-icon large :color="derivedColor">mdi-account-circle</v-icon>
              </v-avatar>
              <span
                v-if="$vuetify.breakpoint.name !== 'xs'"
                :class="
                  derivedColor + '--text ml-1 subtitle-1 font-weight-regular'
                "
              >
                test.test@test.it
              </span>
              <v-icon :color="derivedColor">mdi-chevron-down</v-icon>
            </div>
          </template>

          <v-list dense>
            <v-list-item v-for="(action, index) in accountActions" :key="index">
              <v-list-item-action>
                <v-icon v-text="action.icon"></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-subtitle
                  v-text="action.title"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- LOGOUT -->
    </v-app-bar>

    <!-- LEFT SIDEBAR -->
    <v-navigation-drawer
      id="monokee-main-sidebar"
      v-model="model"
      :mini-variant.sync="mini"
      width="325"
      @transitionend="transitionend()"
      :absolute="mobileBreakpoint"
      :permanent="!mobileBreakpoint"
      app
      :clipped="!mobileBreakpoint"
      :fixed="!mobileBreakpoint"
      style="position: fixed"
    >
      <template #prepend>
        <div
          v-if="
            !mini &&
            topBarImage !== undefined &&
            topBarImage !== null &&
            topBarImage !== ''
          "
          class="ma-5"
        >
          <v-img
            contain
            size="100"
            max-height="100"
            class="mx-auto"
            :src="topBarImage"
          ></v-img>
        </div>
        <div
          v-if="
            mini &&
            miniTopBarImage !== undefined &&
            miniTopBarImage !== null &&
            miniTopBarImage !== ''
          "
          class="py-4"
        >
          <v-img
            contain
            height="40"
            max-width="40"
            class="mx-auto"
            :src="miniTopBarImage"
          ></v-img>
        </div>

        <!-- Monokee logo -->
        <div
          v-if="
            (!mini &&
              (topBarImage === undefined ||
                topBarImage === null ||
                topBarImage === '')) ||
            (mini && miniTopBarImage === undefined) ||
            miniTopBarImage === null ||
            miniTopBarImage === ''
          "
          :class="
            'title-color display-1 font-weight-black py-4' +
            (mini ? ' text-center' : ' pl-4')
          "
          style="font-weight: 600 !important"
        >
          {{ title }}
        </div>
        <v-divider class="mx-2"></v-divider>
      </template>

      <v-list>
        <!-- APPLICATION BROKER sidebar element -->
        <div>
          <v-list-item :inactive="!showSidebar">
            <v-list-item-action class="title-color">
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <span v-on="on">
                    <v-icon>mdi-view-dashboard</v-icon>
                  </span>
                </template>
                <span class="caption"> Application broker</span>
              </v-tooltip>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="title-color"
              >Application broker
              </v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </div>

        <!-- ADMINISTRATION sidebar element -->
        <div v-if="subLinks.length > 0">
          <div v-for="subItem in subLinks" :key="subItem._id">
            <v-list-item
              :disabled="!subItem.allowed"
              :inactive="!showSidebar"
              :to="localePath(subItem.url)"
              @click="mini = true"
            >
              <v-list-item-action class="title-color">
                <v-tooltip right>
                  <template #activator="{ on }">
                    <span v-on="on">
                      <v-icon>{{ subItem.icon }}</v-icon>
                    </span>
                  </template>
                  <span class="caption"> {{ subItem.title }}</span>
                </v-tooltip>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="title-color">{{
                    subItem.title
                  }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>

    <!-- PAGE CONTENT -->
    <v-main>
      <v-container fluid v-if="breadcrumbs">
        <!-- <v-row> -->
        <v-card class="card-box-shadow mt-7 mb-0 mx-5">
          <v-breadcrumbs :items="breadcrumbs">
            <template #item="{ item }">
              <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
                <!-- v-if="
                    !item.last ||
                    !item.text.match(
                      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    )
                  " -->
                <span

                >
                  {{ item.text }}
                </span>
              </v-breadcrumbs-item>
            </template>
            <template #divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-card>
      </v-container>
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      mini: true,
      topBarImage: '',
      miniTopBarImage: '',
      showSidebar: false,
      subLinks: [
        {_id: 'dashboard', icon: 'mdi-chart-box-outline', title: 'Dashboard'},
        {
          _id: 'domain_customizations',
          icon: 'mdi-monitor-dashboard',
          title: 'Domain customizations',
        },
        {_id: 'users', icon: 'mdi-account', title: 'Users'},
        {_id: 'groups', icon: 'mdi-account-group', title: 'Groups'},
        {_id: 'apps', icon: 'mdi-apps', title: 'Applications'},
        {
          _id: 'custom_attributes',
          icon: 'mdi-card-account-details-outline',
          title: 'Custom attributes',
        },
        {
          _id: 'flows',
          icon: 'mdi-graph-outline',
          title: 'Flows engine',
        },
        {
          _id: 'ssi',
          icon: 'mdi-account-star',
          title: 'Self Sovereign Identity',
          url: '/administration/applications',
          allowed: true,
        },
      ],
    }
  },
  computed: {
    breadcrumbs() {
      let splitted = this.$route.path.split('/')
      const lang = splitted[1]
      splitted.shift()
      splitted.shift()

      if (
        splitted[0] == 'application-broker' ||
        splitted[0] == 'account-settings' ||
        (splitted[1] == 'flows' && splitted.length == 4)
      ) {
        return undefined
      } else {
        const bcElements = []
        let partial = '/' + lang + '/'

        let last = false

        for (const [index, el] of splitted.entries()) {
          if (el != 'new-applications' && el != 'update' && !last) {
            bcElements.push({
              text:
              el,
              disabled:
                el == 'administration' || el == 'flows' || el == 'ssi'
                  ? true
                  : false,
              href: partial + el,
              last: false,
            })
          } else {
            last = true
          }

          partial = partial + el + '/'
        }
        if (bcElements.length > 0) {
          if (bcElements[bcElements.length - 1].text == '') {
            bcElements.pop()
          }

          bcElements[bcElements.length - 1].last = true

        }
        return bcElements
      }
    },
    derivedColor() {
      return 'white'
    },
    accountActions() {
      return [
        {
          title: 'Language',
          icon: 'mdi-translate',
        },
        {
          title: 'Resources',
          icon: '$ssi',
        },
        {
          title: 'Devices',
          icon: 'mdi-devices',
        },
        {
          title: 'Logout',
          icon: 'mdi-logout-variant',
        },
      ]
    },
    mobileBreakpoint() {
      return this.$vuetify.breakpoint.name === 'xs'
    },
    sidebarIcon() {
      if (this.mobileBreakpoint) {
        return 'mdi-menu'
      } else {
        return 'mdi-arrow-collapse-left'
      }
    },

    model: {
      get() {
        if (this.mobileBreakpoint) {
          return this.showSidebar
        } else {
          return undefined
        }
      },
      // To avoid vue warning on missing setter
      set(newValue) {
      },
    },
    title() {
      if (!this.mini) {
        return 'monokee'
      } else {
        return 'm'
      }
    },
    hideSidebar() {
      return !this.showSidebar
    },
    theme() {
      return this.$vuetify.theme.isDark
    },
  },

  watch: {
    mini(newValue) {
      this.showSidebar = !newValue
    },
    showSidebar(newValue) {
      this.mini = !newValue
    },
  },

  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    transitionend() {
      if (
        document.getElementById('monokee-main-sidebar').style.transform ==
        'translateX(-100%)'
      ) {
        this.showSidebar = false
      }
    },
  },
}
</script>

<style lang="scss">
.v-main__wrap {
  background-color: var(--v-background-base);
}

html {
  overflow-y: auto;
}

::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 36px;
  border: none;
  background: #b9b9b9;
}

.v-application .title {
  word-break: break-word;
}

@media (max-width: 600px) {
  #monokee-main-sidebar {
    padding-top: 50px;
  }
}
</style>
