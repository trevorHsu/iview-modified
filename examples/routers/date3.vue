<template>
    <div style="width: 500px;margin: 100px;">
        <p>this is date 3</p>
        <p><input type="text"></p>

        <DatePicker3 type="month" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker3>
        <DatePicker3 type="year" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker3>
        <DatePicker3 type="date" split-panels transfer show-week-numbers placeholder="Select date" style="width: 400px"></DatePicker3>
        <DatePicker3 
            type="datetime" show-week-numbers confirm placeholder="Select date" style="width: 400px"
            :options="options2" 
        ></DatePicker3>
        

        
        <DatePicker3 type="daterange" confirm transfer show-week-numbers placeholder="Select date" style="width: 400px"></DatePicker3>
        <br><br><br>
        

        <br><br><br>
        <DatePicker3 
            type="daterange" transfer show-week-numbers placeholder="Select date" style="width: 400px"
            :options="options1" 
        ></DatePicker3>
        <br><br><br>

        <DatePicker3 
            class="no-border-input"
            v-model="dateData"
            type="datetimerange" :options="options1" 
            split-panels transfer show-week-numbers placeholder="Select date" style="width: 400px;"
            @on-ok="confirmFn"
            @on-shortcut-selected="shortcutSelected"
            size="large"
        ></DatePicker3>
        <!-- <Time-Picker :steps="[1, 1, 15]" :value="new Date()"></Time-Picker> -->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                dateData: [new Date(), new Date()],
                options1: {
                    shortcuts: [
                        {
                            text: '今日',
                            grid: 1,
                            value () {
                                return [new Date(), new Date()];
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click today');
                                console.log('picker: ', picker)
                                console.log('this: ', this)
                            }
                        },
                        {
                            text: '昨日',
                            grid: 1,
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return [date, date];
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: '上周',
                            grid: 1,
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return [date, new Date()];
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click a week ago');
                            }
                        },
                        {
                            text: '本周',
                            grid: 1,
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return [date, new Date()];
                            },
                            onClick: (picker) => {
                                this.$Message.info('short cut 1');
                            }
                        },
                        {
                            text: '过去7天',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return [date, new Date()];
                            },
                            onClick: (picker) => {
                                this.$Message.info('short cut 7');
                            }
                        },
                        {
                            text: '过去30天',
                            // value () {
                            //     const date = new Date();
                            //     date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
                            //     return [date, new Date()];
                            // },
                            onClick: (picker) => {
                                this.$Message.info('short cut 30');
                            }
                        },

                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '今日',
                            grid: 1,
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click today');
                                console.log('picker: ', picker)
                                console.log('this: ', this)
                            }
                        },
                        {
                            text: '昨日',
                            grid: 1,
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                    ]
                }
            };
        },
        methods: {
            confirmFn: function(){
                console.log('confirm')
                console.log(this.dateData)
            },
            shortcutSelected: function(){
                console.log('shortcut selected')
                console.log(this.dateData)
            },
        },
    }
</script>

<style>
/* .no-border-input .ivu-input{
    border: none !important;
    outline: none !important;
} */
</style>
