from django.test import TestCase
from django.urls import reverse
from django.core import mail

# Our wall app tests

class WallAppTests(TestCase):
    def test_anonuser_can_create_newuser(self):
        '''
        An anonymous user can create a new user
        '''
        post_data = {
            'username' : 'Testusername',
            'email' : 'test@gmail.com',
            'password' : 'testpassword'
            }
        response = self.client.post(reverse('register'), post_data)
        self.assertIs(response.status_code, 200)
        
    def test_newuser_receives_welcome_email(self):
        '''
        A new user receives a welcome email after successful registration
        '''
        post_data = {
            'username' : 'Testusername',
            'email' : 'test@gmail.com',
            'password' : 'testpassword'
            }
        response = self.client.post(reverse('register'), post_data)
        self.assertIs(response.status_code, 200)
        self.assertEqual(len(mail.outbox), 1)
        msg = mail.outbox[0]
        self.assertEqual(msg.subject, 'Welcome - Registration successful')
        self.assertIn('Congratulations! your registration was successful.', msg.body)
        
    def test_newuser_can_login(self):
        ''' 
        A new registered user can login 
        '''
        post_data = {
            'username' : 'Testusername',
            'email' : 'test@gmail.com',
            'password' : 'testpassword'
            }
        response = self.client.post(reverse('register'), post_data)
        self.assertIs(response.status_code, 200)
        
        login_credentials = {
            'username' : 'Testusername',
            'password' : 'testpassword'
            }
        response = self.client.post(reverse('login'), login_credentials)
        self.assertIs(response.status_code, 200)
        
    def test_authuser_can_post_message(self):
        ''' 
        Authenticated user can post a message
        '''
        post_data = {
            'username' : 'Testusername',
            'email' : 'test@gmail.com',
            'password' : 'testpassword'
            }
        response = self.client.post(reverse('register'), post_data)
        self.assertIs(response.status_code, 200)
        
        login_credentials = {
            'username' : 'Testusername',
            'password' : 'testpassword'
            }
        response = self.client.post(reverse('login'), login_credentials)
        self.assertIs(response.status_code, 200)
        
        message = {
            'content' : 'This is a test message'
            }
        response = self.client.post('/api/messages/', message, HTTP_AUTHORIZATION='Token ' + response.data['token'])
        self.assertIs(response.status_code, 201)
        self.assertEqual(response.data['created_by'], 'Testusername')
        self.assertIn('test message', response.data['content'])
        
    def test_guest_user_cannot_post_message(self):
        ''' 
        Guest user cannot post a message to the wall
        '''
        message = {
            'content' : 'This is a test message'
            }
        response = self.client.post('/api/messages/', message)
        self.assertEqual(response.status_code, 401)
        
    def test_auth_users_can_see_posted_messages(self):
        ''' 
        Authenticated users can be able to see posted messages
        '''
        post_data = {
            'username' : 'Testusername',
            'email' : 'test@gmail.com',
            'password' : 'testpassword'
            }
        response = self.client.post(reverse('register'), post_data)
        self.assertIs(response.status_code, 200)
        
        login_credentials = {
            'username' : 'Testusername',
            'password' : 'testpassword'
            }
        response = self.client.post(reverse('login'), login_credentials)
        self.assertIs(response.status_code, 200)
        
        response = self.client.get('/api/messages/')
        self.assertEqual(response.status_code, 200)
        
    def test_guest_users_can_see_posted_messages(self):
        ''' 
        Guest users can be able to see posted messages
        '''
        response = self.client.get('/api/messages/')
        self.assertEqual(response.status_code, 200)
        
        
