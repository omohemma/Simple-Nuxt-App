<template>
    <div>
        <h2>User's Id is {{$route.params.id}}</h2>
    </div>
</template>

<script>
export default{
validate(context){
  return /^\d+$/.test(context.params.id);
}
}
</script>