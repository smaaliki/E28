import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ViewSPRPage from '@/components/pages/ViewSPRPage.vue'

describe('ViewSPRPage.vue', () => {
  it('shows an SPR', () => {
    let spr = {
      index: 1,
      slug :'unauthorized-admin-page-login',
      title: 'Unauthorized Admin Page Login',
      description:
          'The admin page is accessible by the public! This needs to be addressed immediately as it is a high risk.',
      reportedBy: 'Samer',
      priority: 'High',
      status: 'New',
      type: 'Issue',
      resolution: ''
    };
//    let slug= 'unauthorized-admin-page-login';
    const wrapper = shallowMount(ViewSPRPage, {
      
     propsData: { spr },
    stubs: {
        RouterLink: RouterLinkStub
    }
    })
    expect(wrapper.text()).to.include('View SPR')
    expect(wrapper.text()).to.include(spr.title)
  })
})
