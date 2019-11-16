import Routing
import Vapor

public func routes(_ router: Router) throws {

    router.post("analyse") { req -> Future<PolicyResponse> in
        
        let itemOne = PolicyResponse.PolicyItem(
            title: "Microphone",
            iconURL: "https://image.flaticon.com/icons/svg/149/149427.svg",
            description: "Hello? Hello? Can you hear me?",
            priority: .red)
        
        let itemTwo = PolicyResponse.PolicyItem(
            title: "Contacts",
            iconURL: "https://image.flaticon.com/icons/svg/902/902765.svg",
            description: "Ollie has invited you to play FarmVille",
            priority: .amber)
        
        return Future.map(on: req) { return PolicyResponse(items: [itemOne, itemTwo]) }
    }
}
