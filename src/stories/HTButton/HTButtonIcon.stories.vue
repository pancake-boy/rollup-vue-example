<template>
  <div class="container">
    <div>
      <HTButton
        primary
        @onClick="log"
      >
        <font-awesome-icon icon="plus-circle" />
        <span>Add Credit Card</span>
      </HTButton>
    </div>
    <div>
      <HTButton
        secondary
        @onClick="log"
      >
        <font-awesome-icon icon="eye" />
        <span>View More</span>
        <font-awesome-icon icon="chevron-right" />
      </HTButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import HTButton from '@/components/button/HTButton.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlusCircle,
  faEye,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faPlusCircle,
  faChevronRight,
  faEye,
);

@Component({
  components: { HTButton, FontAwesomeIcon },
})
export default class HTButtonIcon extends Vue {
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
