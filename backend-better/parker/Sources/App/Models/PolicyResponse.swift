//
//  PolicyResponse.swift
//  App
//
//  Created by Oliver Poole on 16/11/2019.
//

import Foundation
import Vapor

struct PolicyResponse: Codable, Content {
    
    struct PolicyItem: Codable, Content {
        
        enum Priority: String, Codable, Content {
            case red
            case amber
            case green
        }
        
        let title: String
        let iconURL: String
        let description: String
        let priority: Priority
    }
    
    let items: [PolicyItem]
}
