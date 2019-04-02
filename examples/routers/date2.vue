<template>
    <div style="width: 500px;margin: 100px;">
        <p>this is date 2</p>
        <p><input type="text"></p>

        <DatePicker2 type="month" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker2>
        <DatePicker2 type="year" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker2>

        <DatePicker2 type="date" split-panels transfer show-week-numbers placeholder="Select date" style="width: 400px"></DatePicker2>
        <DatePicker2 
            type="datetime" show-week-numbers confirm placeholder="Select date" style="width: 400px"
            :options="options1" disabled
        ></DatePicker2>
        
        <br><br><br>
        <DatePicker2 
            type="daterange" transfer show-week-numbers placeholder="Select date" style="width: 400px"
            :options="options1" 
        ></DatePicker2>

        <DatePicker2 type="daterange" confirm transfer show-week-numbers placeholder="Select date" style="width: 400px"></DatePicker2>

        <br><br><br>

        <DatePicker2 
            type="datetimerange" :options="options1" 
            split-panels transfer show-week-numbers placeholder="Select date" style="width: 400px"
            @on-ok="confirmFn"
            v-model="rangeDate"
        ></DatePicker2>

        
        <!-- <Time-Picker :steps="[1, 1, 15]" :value="new Date()"></Time-Picker> -->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                rangeDate: ['2019-03-02 00:00:00', '2019-04-06 00:00:00'],
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
                                return [new Date(), date];
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
                                return [new Date(), date];
                            },
                            onClick: (picker) => {
                                this.$Message.info('本周');
                            }
                        },
                        {
                            text: '过去7天',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return [new Date(), date];
                            },
                            onClick: (picker) => {
                                this.$Message.info('过去7天');
                            }
                        },
                        {
                            text: '过去30天',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
                                return [new Date(), date];
                            },
                            onClick: (picker) => {
                                this.$Message.info('过去30天');
                            }
                        },

                    ]
                },
            };
        },
        methods: {
            confirmFn: function(){
                console.log('confirm')
            }
        },
    }
</script>