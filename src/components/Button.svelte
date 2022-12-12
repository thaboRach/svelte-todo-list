<script>
  export let round = false;
  export let onClick;
</script>

<button on:click={() => onClick()} class:round>
  <slot name="content" />
</button>

<style lang="scss">
  @import 'src/styles/variables.scss';
  button {
    background-color: $white;
    border: none;
    text-align: center;
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;

    &.round {
      position: fixed;
      bottom: 80px;
      right: 40px;
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
    }
    &:hover {
      background-color: $secondary-color;
      transition: 0.7s;
    }
    &:active {
      background-color: $primary-color;
    }
  }
</style>
