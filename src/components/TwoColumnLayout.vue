<template>
  <div class="two-column-layout">
    <div class="left-side"><slot name="left-side" /></div>
    <div class="right-side"><slot name="right-side" /></div>
  </div>
</template>

<style lang="scss" scoped>
.two-column-layout {
  display: flex;

  @include small {
    flex-direction: column;
  }
}

.left-side {
  min-width: 280px;
}

.right-side {
  width: 100%;
}
</style>
