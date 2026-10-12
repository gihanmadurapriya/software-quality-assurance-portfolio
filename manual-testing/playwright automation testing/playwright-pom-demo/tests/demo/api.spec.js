import { test, expect } from '@playwright/test';



test('API Delete Request', async ({ request }) => {


    const Response = await request.delete('https://reqres.in/api/users/2', {
        data: {
            "name": "Jone Doe",
            "job": "leader"
        }

    })

    expect(Response.status()).toBe(204);

}); 

test('API Put Request', async ({ request }) => {


    const Response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Jone Doe",
            "job": "leader"
        }

    })

    expect(Response.status()).toBe(200);

    const text = await Response.text();
    expect(text).toContain('Jone Doe');
    console.log(await Response.json());


}); 
test('API POST Request', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Jone Doe",
            "job": "leader"
        }
    });

    expect(response.status()).toBe(201);

    const text = await response.text();
    expect(text).toContain('Jone Doe');
    console.log(await response.json());
});
test('API Get Request', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Janet');

    console.log(await response.json());

});