extern crate hyper;
extern crate hyper_router;

use hyper::header::{CONTENT_LENGTH, CONTENT_TYPE};
use hyper::{Request, Response, Body};
use hyper::server::Server;
use hyper::rt::Future;
use hyper_router::{Route, RouterBuilder, RouterService};

fn isPrime(number: u32) -> bool {
    if number <= 1 {
        return false;
    }
    for n in 2..number {
        if number % n == 0 {
            return true; // if it is not the last statement you need to use `return`
        }
    }
    true // last value to return
}

fn noProcessHandler(_: Request<Body>) -> Response<Body> {
    let body = "it work";
    Response::builder()
        .header(CONTENT_LENGTH, body.len() as u64)
        .header(CONTENT_TYPE, "text/plain")
        .body(Body::from(body))
        .expect("Failed to construct the response")
}

fn heavyProcessHandler(_: Request<Body>) -> Response<Body> {
    let result = isPrime(12345678).to_string();
    Response::builder()
        .header(CONTENT_LENGTH, result.len() as u64)
        .header(CONTENT_TYPE, "text/plain")
        .body(Body::from(result))
        .expect("Failed to construct the response")
}

fn router_service() -> Result<RouterService, std::io::Error> {
    let router = RouterBuilder::new()
        .add(Route::get("/no_process").using(noProcessHandler))
        .add(Route::get("/heavy_process").using(heavyProcessHandler))
        .build();

    Ok(RouterService::new(router))
}

fn main() {
    let addr = "0.0.0.0:3000".parse().unwrap();
    let server = Server::bind(&addr)
        .serve(router_service)
        .map_err(|e| eprintln!("server error: {}", e));
    println!("Server started on 3000");
    hyper::rt::run(server)
}