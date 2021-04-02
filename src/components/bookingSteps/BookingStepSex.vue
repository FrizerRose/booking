<template>
  <div class="o-layout o-list -gutter">
    <div class="o-layout_item">
      <div class="row">
        <div class="col-md-6">
          <button
            class="btn btn-primary"
            @click="selectSex('female')"
          >
            Za žene
          </button>
        </div>
        <div class="col-md-6">
          <button
            class="btn btn-primary"
            @click="selectSex('male')"
          >
            Za muškarce
          </button>
        </div>
      </div>
      <div class="row">
        <button
          class="btn btn-primary"
          @click="selectSex('both')"
        >
          Svejedno
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import { nextStep } from '@/utils/helpers';

export default defineComponent({
  setup() {
    const store = useStore();

    function selectSex(sex: string) {
      store.commit(MutationTypes.CHANGE_SELECTED_SEX, sex);

      nextStep();
    }

    return {
      selectSex,
    };
  },
});
</script>
