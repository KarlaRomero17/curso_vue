// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('Example', () => {
  test('Debe ser mayor a 10', () => {
    //areglar
    let value = 9;
    //estimulo
    value = value + 2;
    //observar el resultado
    expect(value).toBeGreaterThan(10);
  })


})