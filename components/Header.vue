<template>
    <div class="icon-bar">
    <span class="active"><i class="fa fa-home"></i></span>
    <h3>Rick And Morty Show</h3>
    </div>
</template>

<style>
    .icon-bar {
        width: 100%;
        background-color: #555;
        overflow: auto;
    }

    .icon-bar span {
        float: left;
        width: 50px;
        text-align: center;
        padding: 10px 0;
        color: white;
        font-size: 20px;
    }

    .active {
        background-color: #2196F3;
    }

    .icon-bar h3 {
        color: white;
        text-align: center;
        margin-top: 12px;
    }
</style>