<script>
  export let label;
  export let done;
</script>

<div class:filled={done} />
<p class:done>{label}</p>

<style lang="scss">
  @import 'src/styles/variables.scss';
  div {
    width: 1rem;
    height: 1rem;

    background-color: transparent;
    border-color: $secondary-color;
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;

    justify-self: end;
    align-self: center;

    margin-right: 1rem;

    &.filled {
      background-color: $secondary-color;
    }
  }
  p {
    font-size: 2rem;
    justify-self: start;
    padding: 1rem;
    border-bottom: 2px solid $secondary-color;
    min-width: 8rem;
    @media screen and (max-width: $mobile) {
      font-size: 1.5rem;
    }

    &.done {
      text-decoration: line-through;
    }
  }
</style>
