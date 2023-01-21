import axios from 'axios';
import {jest} from '@jest/globals';
import expect from 'expect'; jest;

test('Get status 200', async () => {
    const config = {
    method: 'get',
    url: 'https://dummyjson.com/products/1',
    data: { },
    headers: { },
    }
    const resp = await axios(config);
    expect(resp.status).toEqual(200)
    })

    test('Get title', async () => {
        const config = {
        method: 'get',
        url: 'https://dummyjson.com/products/1',
        data: { },
        headers: { },
        }
        const resp = await axios(config);
      //  console.log(resp.data)
        expect(resp.data.title).toEqual('iPhone 9')
        })  

        test('Post response', async () => {
            const config = {
            method: 'post',
            url: 'https://dummyjson.com/products/add',
            data: 
            {
                'title' : 'New iPhone', 
                'price' : 1000,
            },
        }
           
            const resp = await axios(config);
            expect(resp.data.title).toBe('New iPhone')
            expect(resp.data.price).toBe(1000)
       //     console.log(resp.data)
            })

            test('AUTH', async () => {
                const config = {
                method: 'post',
                url: 'https://dummyjson.com/auth/login',
                data: 
                {
                    'username': 'kminchelle',
                    'password': '0lelplR',
                },
            }
            const resp = await axios(config);
            const config_prod = await axios({
                method: 'get',
                url: 'https://dummyjson.com/auth/products/1',
                headers: {
               'Authorization' : 'Bearer ${resp.data.token}',
            },
        })
            expect(config_prod.status).toEqual(200);
           
     })