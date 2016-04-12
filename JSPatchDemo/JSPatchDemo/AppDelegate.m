//
//  AppDelegate.m
//  JSPatch
//
//  Created by bang on 15/4/30.
//  Copyright (c) 2015年 bang. All rights reserved.
//

#import "AppDelegate.h"
#import "JPEngine.h"
#import "JPViewController.h"
#import "JPLoader.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
//    [JPLoader run];
    
//    [JPEngine startEngine];
//    NSString *sourcePath = [[NSBundle mainBundle] pathForResource:@"demo" ofType:@"js"];
//    NSString *script = [NSString stringWithContentsOfFile:sourcePath encoding:NSUTF8StringEncoding error:nil];
//    [JPEngine evaluateScript:script];
    
    
    //同步下载
        [JPEngine startEngine];
        NSURL *url = [NSURL URLWithString:@"https://raw.githubusercontent.com/Mag1cPanda/JSPatchTest/master/callx.js"];
        NSURLRequest *request = [NSURLRequest requestWithURL:url];
        NSError *error = nil;
        NSData   *data = [NSURLConnection sendSynchronousRequest:request
                                               returningResponse:nil
                                                           error:&error];
    
        NSString *script = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
        NSLog(@"%@",script);
        [JPEngine evaluateScript:script];
    
    //异步下载
    //    [JPEngine startEngine];
    //    NSURL *url = [NSURL URLWithString:@"https://raw.githubusercontent.com/Mag1cPanda/JSPatchTest/master/callx.js"];
    //    [NSURLConnection sendAsynchronousRequest:[NSURLRequest requestWithURL:url] queue:[NSOperationQueue mainQueue] completionHandler:^(NSURLResponse *response, NSData *data, NSError *connectionError) {
    //
    //        NSString *script = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    //        NSLog(@"%@",script);
    //        [JPEngine evaluateScript:script];
    //
    //        UIStoryboard *sb = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
    //        ViewController *vc = [sb instantiateInitialViewController];
    //        self.window.rootViewController = vc;
    //    }];
    
    
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    JPViewController *rootViewController = [[JPViewController alloc] init];
    UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:rootViewController];
    self.window.rootViewController = navigationController;
    [self.window makeKeyAndVisible];
    
    [[UINavigationBar appearance] setBackgroundImage:nil forBarMetrics:UIBarMetricsCompact];
    return YES;
}
@end
