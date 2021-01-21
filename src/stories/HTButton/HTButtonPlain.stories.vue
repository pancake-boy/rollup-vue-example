<template>
  <div class="container">
    <div>
      <HTButton
        primary
        @onClick="log"
      >
        Primary
      </HTButton>
    </div>
    <div>
      <HTButton
        secondary
        @onClick="log"
      >
        Secondary
      </HTButton>
    </div>
    <div>
      <HTButton
        critical
        @onClick="log"
      >
        Critical
      </HTButton>
    </div>
    <div>
      <HTButton
        tertiary
        @onClick="log"
      >
        Tertiary
      </HTButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import HTButton from '@/components/button/HTButton.vue';

@Component({
  components: {
    HTButton,
  },
})
export default class HTButtonPlain extends Vue {
  log() {
    action('onClick')();
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  div {
    padding: 20px;
  }
}
</style>
