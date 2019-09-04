<template>
    <div>
        <button v-text="text"></button>
    </div>
</template>
<script>
export default {
    name:"jxButton",
    props:{
        text:{
            type:String,
            default:"Button"
        }
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

