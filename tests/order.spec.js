import {fixturetest,expect} from "./fixturedemo.js"

fixturetest(`custom fixture`,async({testdata})=>
{
    console.log(await testdata.title());
});