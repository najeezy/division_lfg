import expect from 'expect'
import * as types from '../../app/assets/javascripts/components/actions/action_types.js'
import * as actions from '../../app/assets/javascripts/components/actions/user_auth_actions.js'

// async testing dependencies
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import '../test_globals.js'

const middleWares = [thunk]
const mockStore = configureMockStore(middleWares)

describe('user auth action creators', () => {
  const id = 1
  const email = 'someemail@email.com'
  const password = 'password123'

  it('creates an action for SET_USER', () => {
    expect(
      actions.setUser(id, email)
    ).toEqual(
      {
        type: types.SET_USER,
        id,
        email
      }
    )
  })

  it('creates and action for REQUEST_USER', () => {
    expect(
      actions.requestUser()
    ).toEqual(
      {
        type: types.REQUEST_USER
      }
    )
  })

  it('creates an action for INVALIDATE_USER', () => {
    expect(
      actions.invalidateUser('this is an error')
    ).toEqual(
      {
        type: types.INVALIDATE_USER,
        error: 'this is an error'
      }
    )
  })

  it('creates an action from UNSET_USER', () => {
    expect(
      actions.unsetUser()
    ).toEqual(
      {
        type: types.UNSET_USER
      }
    )
  })

  describe('async actions', () => {
    afterEach(() => {
      nock.cleanAll()
    })

    describe('fetchUser', () => {

      it('creates REQUEST_USER and SET_USER when fetching user that is logged in', (done) => {
        nock('http://localhost:3000/')
          .get('/sessions')
          .query({ authenticity_token: global._token })
          .reply(200, { user: { id, email } });

        const expectedActions = [
          { type: types.REQUEST_USER },
          { type: types.SET_USER, id, email }
        ];

        const store = mockStore({}, expectedActions, done);
        store.dispatch(actions.fetchUser());
      })

      it('creates REQUEST_USER and UNSET_USER when fetching user that is logged out', (done) => {
        nock('http://localhost:3000/')
          .get('/sessions')
          .query({ authenticity_token: global._token })
          .reply(200, { user: null })

        const expectedActions = [
          { type: types.REQUEST_USER },
          { type: types.UNSET_USER }
        ];

        const store = mockStore({}, expectedActions, done);
        store.dispatch(actions.fetchUser());
      })
    })

    describe('fetchLoginUser', () => {

      it('creates REQUEST_USER and SET_USER when logging in user is successful', (done) => {
        nock('http://localhost:3000/')
          .post('/sessions', { email, password })
          .query({ authenticity_token: global._token })
          .reply(200, { success: true, user: { id, email } });

        const expectedActions = [
          { type: types.REQUEST_USER },
          { type: types.SET_USER, id, email }
        ];

        const store = mockStore({}, expectedActions, done);
        store.dispatch(actions.fetchLoginUser(email, password));
      });

      it('creates REQUEST_USER and ADD_ERRORS when logging in user fails', (done) => {
        nock('http://localhost:3000/')
          .post('/sessions', { email, password })
          .query({ authenticity_token: global._token })
          .reply(200, { success: false, errors: ['some error'] });

        const expectedActions = [
          { type: types.REQUEST_USER },
          { type: types.ADD_ERRORS, errors: ['some error'] }
        ];

        const store = mockStore({}, expectedActions, done);
        store.dispatch(actions.fetchLoginUser(email, password));
      })

    });

    describe('fetchLogoutUser', (done) => {

      it('creates REQUEST_USER and UNSET_USER when logging out user', (done) => {
        nock('http://localhost:3000/')
          .delete('/sessions/1')
          .query({ authenticity_token: global._token })
          .reply(200, {});

        const expectedActions = [
          { type: types.REQUEST_USER },
          { type: types.UNSET_USER }
        ];

        const store = mockStore({}, expectedActions, done);
        store.dispatch(actions.fetchLogoutUser(1));
      })
    })

    describe('fetchSignUpUser', (done) => {

      it('creates REQUEST_USER and SET_USER when logging out user', (done) => {
        const password_confirmation = password
        const platform = 'someplatform'
        const username = 'someusername'
        const level = 30

        nock('http://localhost:3000/')
          .post('/users', {
            user: {
              email,
              password,
              password_confirmation,
              player_attributes: { platform, username, level }
            },
          })
          .query({ authenticity_token: global._token })
          .reply(200, { success: true, user: { id, email } });

        const expectedActions = [
          { type: types.REQUEST_USER },
          { type: types.SET_USER, id, email }
        ];

        const store = mockStore({}, expectedActions, done);
        store.dispatch(actions.fetchSignUpUser(
          email, password, password_confirmation, platform, username, level
        ));
      })
    })
  })
})
